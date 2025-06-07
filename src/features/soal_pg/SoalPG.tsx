import DisplayTimer from "../../components/DisplayTimer"
import { useNavigate } from "react-router-dom"
import { submitGoogleForm } from "../../helper/ForceSubmit"

export const QuizPG = (): React.ReactElement => {
    const navigate = useNavigate()

    const handleExpire = () => {
        const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScSAVWvBMI2VJ_i7lHzoi1zTFPh1kFTNK6VdY1evHAzn9XZ4Q/formResponse"; 
        submitGoogleForm(formUrl, {});

        alert("Time's Up")
        navigate("/quiz-essay");
    }

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
            <DisplayTimer handleExpire={handleExpire} timerID="quizpg"/>
            <iframe 
                src={import.meta.env.VITE_APP_GFORM_QUIZ_PG_LINK}
                width="640" 
                height="1925" 
            >
                Loading…
            </iframe>
        </div>
    )
}