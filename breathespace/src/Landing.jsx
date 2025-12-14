import Mascot from "./components/Mascot.jsx";

import About from "./components/About.jsx";

function Front({ onStart }) {
  return (
    <>
      <div className="container z-10 flex flex-col justify-center align-center mx-auto gap-8 my-auto">
        <h1 className="relative">BreatheSpace</h1>
        <button className="bg-primary relative w-1/2 h-12 border mx-auto" onClick={onStart}>
          Get Started
        </button>
        <h3 className="my-auto">{"↓↓↓ Learn More ↓↓↓"}</h3>
      </div>

    </>
  );
}


function Landing({ onStart }) {
  return (
    <>
        <div className="relative w-full h-screen overflow-hidden flex justify-center items-center">
            <div className=" z--1 w-full h-screen absolute top-0 left-0 shadow-white shadow-lg shadow-inside">
            <Mascot />
            </div>
            <Front onStart={onStart}/>
        </div>
        <About />
      
      {/* <Audio /> */}
    </>
  );
}

export default Landing;
