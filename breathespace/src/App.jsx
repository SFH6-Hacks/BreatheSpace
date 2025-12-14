import { useState } from 'react'

import './App.css'
import Landing from './Landing.jsx'
import Onboarding from './Onboarding.jsx';
import Dashboard from './Dashboard.jsx';
import Audio from "./components/Audio.jsx";

function App() {
  // initialize from localStorage
  const [accountMade, setAccountStatus] = useState(() =>
    localStorage.getItem('Account-Status') === 'true'
  );
  const [currentPage, setCurrentPage] = useState(accountMade ? 'app' : 'landing');

  const handleAccountCreate = ()=> {
    setAccountStatus(true);
    localStorage.setItem('Account-Status','true');
    setCurrentPage('app');
  };

  // When Landing "Get Started" is clicked:
  const handleLandingStart = () => {
    if (accountMade) {
      setCurrentPage('app');
    } else {
      setCurrentPage('onboarding');
    }
  };

  // Clear stored user data and start onboarding for a fresh account
  const resetAccountAndStart = () => {
    const keysToRemove = [
      'Account-Status','name','mood','moodHistory','journalEntries',
      'lastCheckIn','todayMood','streak','totalDays','isFirstVisit'
    ];
    keysToRemove.forEach(k => localStorage.removeItem(k));
    setAccountStatus(false);
    setCurrentPage('onboarding');
  };

  if (currentPage === 'landing' ) {
    return(
      <>
        <Landing
          onStart={handleLandingStart}
          onStartNew={resetAccountAndStart}
          accountMade={accountMade}
        />
        <Audio />
      </>
    );
  }
  if (currentPage === 'onboarding') {
    return (
      <>
        <Onboarding onComplete={() => setCurrentPage('app')} onAccountCreate={handleAccountCreate}/>
        <Audio />
      </>
    );
  }
  // app (dashboard) or fallback
  return (
    <>
      <Dashboard onStart={()=> setCurrentPage('landing')} />
      <Audio />
    </>
  );
}
export default App;
