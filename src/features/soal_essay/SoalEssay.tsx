import DisplayTimer from "../../components/DisplayTimer"
import { submitGoogleForm } from "../../helper/ForceSubmit"

export const QuizEssay = (): React.ReactElement => {

    const handleExpire = () => {
        const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeJ-Ni5_fRfKZJ-K3vptF9B9_UbE-SB9hkkjxcHZjL93Y2bnA/formResponse"; 
        submitGoogleForm(formUrl, {});

        alert("Time's Up")
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
            <DisplayTimer handleExpire={handleExpire} timerID="quizessay"/>
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