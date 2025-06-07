import Timer from "./Timer";
import styles from "./styles/Timer.module.css";

interface DisplayTimerProps {
    handleExpire: () => void
    timerID: string
}

const DisplayTimer: React.FC<DisplayTimerProps> = ({handleExpire, timerID}) => {
  return (
    <header className={styles.root} style={{
      width: "inherit",
      height: "inherit",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
    }}>
      <Timer durationSeconds={120} onExpire={handleExpire} timerId={timerID} />
    </header>
  );
};

export default DisplayTimer;