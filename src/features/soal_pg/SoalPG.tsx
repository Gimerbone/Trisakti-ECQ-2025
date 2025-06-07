import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import DisplayTimer from "../../components/DisplayTimer";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../store/firebase";

export const QuizPG = (): React.ReactElement => {
    const navigate = useNavigate();
    const { user } = useAuth(); // must be logged in
    const [loading, setLoading] = useState(true);
    const hasExpired = useRef(false);

    const timerID = "quizpg";

    useEffect(() => {
        if (!user) return;

        const checkExpiration = async () => {
            const timerDocRef = doc(db, "timers", `${user.uid}_${timerID}`);
            const snap = await getDoc(timerDocRef);

            if (snap.exists() && snap.data().hasExpired === true) {
                navigate("/quiz-essay"); // Redirect if already expired
            } else {
                setLoading(false); // Show form
            }
        };

        checkExpiration();
    }, [user, navigate]);

    const handleExpire = async () => {
        if (hasExpired.current || !user) return;
        hasExpired.current = true;

        const timerDocRef = doc(db, "timers", `${user.uid}_${timerID}`);
        await setDoc(timerDocRef, { hasExpired: true }, { merge: true });

        alert("Time's Up");
        navigate("/quiz-essay");
    };

    if (loading) return <p>Checking timer...</p>;

    return (
        <div
            style={{
                width: "inherit",
                height: "inherit",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px"
            }}
        >
            <DisplayTimer handleExpire={handleExpire} timerID={timerID} />
            <iframe 
                src={import.meta.env.VITE_APP_GFORM_QUIZ_PG_LINK}
                width="640" 
                height="1925"
            >
                Loading…
            </iframe>
        </div>
    );
};
