import { useState } from 'react'

import './App.css'
import Landing from './Landing.jsx'
import Onboarding from './Onboarding.jsx';
import Dashboard from './Dashboard.jsx';


function App() {
  const [currentPage, setCurrentPage] = useState('landing');

    if (currentPage === 'landing') {
      
      return <Landing onStart={() => setCurrentPage('onboarding')} />;
      }
    if (currentPage === 'onboarding') {
      return <Onboarding onComplete={() => setCurrentPage('app')} />;
      }
    if (currentPage === 'app') {
      return <Dashboard onStart={()=> setCurrentPage('landing')} />;
      }
}

export default App
