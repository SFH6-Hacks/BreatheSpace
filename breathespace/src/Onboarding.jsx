import { useState } from "react";


function AskName({ onGetName }) {
    return(
        <>
            <h1>Onboarding Page - Ask Name</h1>
            <button onClick={onGetName}>Submit</button>
        </>

    );
}

function MoodCheck({ onComplete, onBack }) {
    return(
        <>
            <h1>MoodCheck</h1>
            <button onClick={onBack}>Back</button>
            <button onClick={onComplete}>Complete Onboarding</button>
        </>
    );
}
function Onboarding({ onComplete }) {
    let [onboardingStep, setOnboardingStep] = useState(1);
    if (onboardingStep === 1) {
        return <AskName onGetName={() => setOnboardingStep(2)} />;
    }
    if (onboardingStep === 2) {
        return(
            <>
                <MoodCheck onComplete={onComplete} onBack={() => setOnboardingStep(1)} />
            </>
        );
    }
    

}

export default Onboarding;