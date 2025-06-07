// src/components/Timer.tsx
import { useEffect, useState } from "react";
import type { FC } from "react";
import { useAuth } from "../context/AuthContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../store/firebase";

interface TimerProps {
  durationSeconds: number;
  onExpire: () => void;
  timerId: string; // unique ID for this timer (per page/form)
}

const Timer: FC<TimerProps> = ({ durationSeconds, onExpire, timerId }) => {
  const { user } = useAuth();
  const [remaining, setRemaining] = useState(durationSeconds);

  useEffect(() => {
    if (!user) return;
    const timerDoc = doc(db, "timers", `${user.uid}_${timerId}`);
    let startTime: number;
    let intervalId: ReturnType<typeof setInterval>;

    (async () => {
    try {
        const snap = await getDoc(timerDoc);
        if (snap.exists()) {
        startTime = snap.data().startTime as number;
        } else {
        startTime = Date.now();
        await setDoc(timerDoc, { startTime });
        }

        const tick = () => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const rem = durationSeconds - elapsed;
        if (rem <= 0) {
            clearInterval(intervalId);
            setRemaining(0);
            onExpire();
        } else {
            setRemaining(rem);
        }
        };

        tick();
        intervalId = setInterval(tick, 1000);
    } catch (err) {
        console.error("Failed to load or create timer doc:", err);
    }
    })();

    return () => clearInterval(intervalId);
  }, [user?.uid, durationSeconds, onExpire]);

  if (remaining <= 0) {
    return <p>Time is up!</p>;
  }

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  return <p>{`${minutes}:${seconds.toString().padStart(2, "0")}`}</p>;
};

export default Timer;