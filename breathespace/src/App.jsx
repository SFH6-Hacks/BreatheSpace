import { useState } from 'react'

import './App.css'
import Landing from './Landing.jsx'
import Onboarding from './Onboarding.jsx';




function App() {
  const [currentPage, setCurrentPage] = useState('landing');

    if (currentPage === 'landing') {
      
      return <Landing onStart={() => setCurrentPage('onboarding')} />;
      }
    if (currentPage === 'onboarding') {
      return <Onboarding onComplete={() => setCurrentPage('app')} />;
      }
    if (currentPage === 'app') {
      return <Dashboard />;
      }
}

export default App
