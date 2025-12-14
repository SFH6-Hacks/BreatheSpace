import { useState } from 'react'

import './App.css'
import Landing from './Landing.jsx'
import Onboarding from './Onboarding.jsx';
import Dashboard from './Dashboard.jsx';
import Audio from "./components/Audio.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState(
  localStorage.getItem('Account-Status') === 'true' ? 'app' : 'landing'
);;
  const [accountMade, setAccountStatus] = useState(false);

  const handleAccountCreate = ()=> {
    setAccountStatus(true);
    localStorage.setItem('Account-Status','true');
    
    setCurrentPage('app')
  }

    if (currentPage === 'landing' ) {
      
      return(
        <>
      <Landing onStart={() => setCurrentPage('onboarding')} />
    <Audio />
    </>);
      }
    if (currentPage === 'onboarding') {
      return (
        <>
      <Onboarding onComplete={() => setCurrentPage('app')} onAccountCreate={handleAccountCreate}/>
        <Audio />
        </>
    );
      }
    if (currentPage === 'app') {
      return (
        <>
        <Dashboard onStart={()=> setCurrentPage('landing')} />
        <Audio />
        </>
    );
}
}
export default App;
