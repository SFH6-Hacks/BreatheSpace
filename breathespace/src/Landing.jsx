import Mascot from './components/Mascot.jsx';



function Front() {
    return(
      <div className="container z-10 flex flex-col justify-center align-center mx-auto gap-8">
        <h1 className='relative'>BreatheSpace</h1>
        <button className='bg-primary relative w-1/2 mx-auto'>Get Started</button>
        <h3 className=''>{'↓↓↓ Learn More ↓↓↓'}</h3>
      </div>
    );
}

function Landing() {

  return (
    <>
      <div className=" z--1 w-full h-full absolute top-0 left-0 shadow-white shadow-lg shadow-inside">
        <Mascot />
      </div>
        <Front />
      
      
        
    </>
  )
}

export default Landing;