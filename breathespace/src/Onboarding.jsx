
import { FcGoogle } from 'react-icons/fc';
import { FaInstagram, FaSnapchatGhost, FaEnvelope } from 'react-icons/fa';

import { useState } from "react";

function AskName({ name, onNameChange, onGetName, onGuestContinue }) {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && name.trim()) {
            onGetName();
        }
    }
    return (
        <div className="min-h-screen bg-base flex text-toon">
    
            <div className="w-full lg:w-2/3 flex items-center justify-center px-8 py-12">
                <div className="w-full max-w-md space-y-8">
                    <div className="space-y-3 text-center lg:text-left">
                        <h1 className="text-4xl font-bold text-primary">
                            Welcome! 👋
                        </h1>
                        <p className="text-lg text-muted">
                            Let's get started on your mental health journey
                        </p>
                    </div>

     
                    <div className="space-y-3">
                        <label className="block text-sm text-muted">What's your name?</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => onNameChange(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full px-6 py-3 bg-light text-primary rounded-lg border border-[var(--border)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                            onKeyDown={handleKeyDown}
                        />
                    </div>


                    <div className="space-y-3">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[var(--border)]"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-base text-muted">Continue with</span>
                            </div>
                        </div>

                        <div className="space-y-3 flex flex-wrap">
                            <button
                                onClick={() => alert('Google sign-in coming soon!')}
                                className="w-1/3 px-6 py-3 bg-light text-primary rounded-lg border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-200 flex items-center justify-center gap-3"
                            >
                                <FcGoogle className="w-6 h-6" />
                                <span>Google</span>
                            </button>
                            
                            <button
                                onClick={() => alert('Instagram sign-in coming soon!')}
                                className="w-1/3 px-6 py-3 bg-light text-primary rounded-lg border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-200 flex items-center justify-center gap-3"
                            >
                                <FaInstagram className="w-6 h-6 text-pink-500" />
                                <span>Instagram</span>
                            </button>
                            
                            <button
                                onClick={() => alert('Snapchat sign-in coming soon!')}
                                className="w-1/3 px-6 py-3 bg-light text-primary rounded-lg border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-200 flex items-center justify-center gap-3"
                            >
                                <FaSnapchatGhost className="w-6 h-6 text-yellow-200" />
                                <span>Snapchat</span>
                            </button>
                            
                            <button
                                onClick={onGetName}
                                disabled={!name.trim()}
                                className="w-full px-6 py-3 bg-light text-primary rounded-lg border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <FaEnvelope className='w-6 h-6 text-white' />
                                <span>Continue with Email</span>
                            </button>
                        </div>
                    </div>

          
                    <div className="text-center pt-4">
                        <button 
                            onClick={onGuestContinue}
                            className="text-muted hover:text-primary underline transition-colors"
                        >
                            Continue as Guest →
                        </button>
                    </div>
                </div>
            </div>


            <div className="hidden lg:block w-1/3 bg-light relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-6 p-8">
                        <div className="text-6xl">🌱</div>
                        <h2 className="text-2xl font-bold text-primary">Your Safe Space</h2>
                        <p className="text-muted">Track your mood, journal your thoughts, and grow stronger every day</p>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[var(--primary)] opacity-10"></div>
            </div>
        </div>
    );
}

function MoodCheck({ onComplete, onBack, userName, onMoodChange, mood }) {
    // const [mood, setMood] = useState("");
    
    const moods = [
        { emoji: '😊', label: 'Happy', value: 'happy' },
        { emoji: '😢', label: 'Sad', value: 'sad' },
        { emoji: '😰', label: 'Anxious', value: 'anxious' },
        { emoji: '😡', label: 'Angry', value: 'angry' },
        { emoji: '😐', label: 'Neutral', value: 'neutral' },
        { emoji: '😴', label: 'Tired', value: 'tired' },
        { emoji: '🤗', label: 'Grateful', value: 'grateful' },
        { emoji: '😌', label: 'Calm', value: 'calm' }
    ];

    
    return (
        <div className="min-h-screen bg-base flex">
       
            <div className="w-full lg:w-2/3 flex items-center justify-center px-8 py-12">
                <div className="w-full max-w-2xl space-y-8">
                    <div className="space-y-3 text-center lg:text-left">
                        <h1 className="text-4xl font-bold text-primary">
                            Hi {userName || 'there'}! 
                        </h1>
                        <p className="text-lg text-muted">
                            How are you feeling today?
                        </p>
                    </div>

             
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {moods.map((m) => (
                            <button
                                key={m.value}
                                onClick={() => onMoodChange(m.emoji)}
                                className={`p-6 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-3 ${
                                    mood === m.value
                                        ? 'border-[var(--primary)] bg-[var(--highlight)]'
                                        : 'border-[var(--border)] bg-light hover:border-[var(--primary)]'
                                }`}
                            >
                                <span className="text-4xl">{m.emoji}</span>
                                <span className="text-sm text-primary">{m.label}</span>
                            </button>
                        ))}
                    </div>

                  
                    <div className="flex gap-4 pt-4">
                        <button 
                            onClick={onBack}
                            className="px-8 py-3 text-muted hover:text-primary underline transition-colors"
                        >
                            ← Back
                        </button>
                        <button 
                            onClick={onComplete}
                            disabled={!mood}
                            className="flex-1 px-8 py-3 rounded-lg font-medium bg-primary text-primary hover:bg-primary-hover transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Complete Onboarding
                        </button>
                    </div>
                </div>
            </div>

          
            <div className="hidden lg:block w-1/3 bg-light relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-6 p-8">
                        <div className="text-6xl">💭</div>
                        <h2 className="text-2xl font-bold text-primary">Track Your Journey</h2>
                        <p className="text-muted">Understanding your emotions is the first step to wellness</p>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[var(--primary)] opacity-10"></div>
            </div>
        </div>
    );
}

function Onboarding({ onComplete , onAccountCreate}) {
    const [onboardingStep, setOnboardingStep] = useState(1);
    const [name, setName] = useState("");
    const [mood, setMood] = useState('');
    
    const handleGuestContinue = () => {
        setName('Guest');
        localStorage.setItem('name', 'Secret-Cereal-King');
        setOnboardingStep(2);
    };
    // const handleNameChange = (newName) => {
    //     setName(newName);
    //     setOnboardingStep(2);

    // };
    const handleMoodChange = () =>{

    }
    const accountComplete = () =>{
        onAccountCreate();
        onComplete();
        localStorage.setItem('name', name);
        localStorage.setItem('mood', mood);
        localStorage.setItem('day',1);
    }
    
    if (onboardingStep === 1) {
        return (
            <AskName 
                name={name}
                onNameChange={setName}
                onGetName={() => setOnboardingStep(2)} 
                onGuestContinue={handleGuestContinue}
            />
        );
    }
    
    if (onboardingStep === 2) {
        return (
            <MoodCheck 
                userName={name}
                mood = {mood}
                onMoodChange = {setMood}
                onComplete={accountComplete} 
                onBack={() => setOnboardingStep(1)} 
            />
        );
    }
}

export default Onboarding;


