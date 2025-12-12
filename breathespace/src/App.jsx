import { useState } from 'react'

import './App.css'
import Spline from '@splinetool/react-spline';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-3/4 h-3/4 mx-auto my-auto'>
      <Spline scene="https://prod.spline.design/7Xj8E0YF-bgLwwzt/scene.splinecode" />
    </div>
            
    </>
  )
}

export default App
