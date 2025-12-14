import SDG3 from '/SDG3.png'

function About(){
    return(
        // Add this below your hero section in App.jsx

<section className="text-toon relative bg-dark py-20 px-6 about-section" id="about">
  <div className="max-w-6xl mx-auto">
    
   
    <div className="text-center mb-16">
      <h2 className="text-5xl mb-4">
        Built for Students, By Students
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        A mental health companion created during WCTD Hackathon 2025
      </p>
    </div>

 
    <div className="grid md:grid-cols-2 gap-12 mb-16">
      <div className="bg-light p-8 rounded-2xl border-l-4 border-red-500">
        <h3 className="text-3xl font-bold text-white mb-4" style={{WebkitTextStroke: '1.5px black'}}>
          The Problem
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          <strong className="text-red-400">1 in 7 students</strong> struggle with mental health. 
          School counseling has <strong className="text-red-400">2-6 month waitlists</strong>. 
          Therapy apps cost GBP 60-90/week. Students need support <em>now</em>, not later.
        </p>
      </div>

      <div className="bg-light p-8 rounded-2xl border-l-4 border-[hsl(160,45%,55%)]">
        <h3 className="text-3xl font-bold text-white mb-4" style={{WebkitTextStroke: '1.5px black'}}>
          Our Solution
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          BreatheSpace provides <strong className="text-[hsl(160,45%,55%)]">instant, free mental health support</strong> through 
          AI-powered check-ins, journaling, and crisis resources. No waitlists. No judgment. Just support when you need it.
        </p>
      </div>
    </div>


    <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary)] p-10 rounded-2xl border-highlight border-4 mb-16">
      <h3 className="text-3xl font-bold text-white mb-6 text-center" style={{WebkitTextStroke: '1.5px black'}}>
        UN Sustainable Development Goals
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex items-start gap-4">
          <img src="{SDG3}" alt="" />
          <div>
            <h4 className="text-xl font-bold text-white mb-2">SDG 3: Good Health</h4>
            <p className="text-gray-300">Ensuring mental well-being for students at all ages</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="text-5xl">📚</div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">SDG 4: Quality Education</h4>
            <p className="text-gray-300">Mental health support enables students to learn and thrive</p>
          </div>
        </div>
      </div>
    </div>


    <div className="text-center mb-12">
      <h3 className="text-4xl font-bold text-white mb-8" style={{WebkitTextStroke: '2px black'}}>
        The Team
      </h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-base p-6 rounded-xl border-2 border-[var(--primary)] hover:border-white transition">
          <div className="w-24 h-24 mx-auto mb-4 bg-[hsl(160,45%,55%)] rounded-full flex items-center justify-center text-4xl">
            👤
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Mircea Savan-Bucrestian(@m1c-dev)</h4>
          <p className="text-gray-400 text-sm">Developer</p>

        </div>
        
        <div className="bg-base p-6 rounded-xl border-2 border-[var(--primary)] hover:border-white transition">
          <div className="w-24 h-24 mx-auto mb-4 bg-[hsl(160,45%,55%)] rounded-full flex items-center justify-center text-4xl">
            👤
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Ashley Hassell</h4>
          <p className="text-gray-400 text-sm">Idea</p>
        </div>

 <div className="bg-base p-6 rounded-xl border-2 border-[var(--primary)] hover:border-white transition">
          <div className="w-24 h-24 mx-auto mb-4 bg-[hsl(160,45%,55%)] rounded-full flex items-center justify-center text-4xl">
            👤
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Mary</h4>
          <p className="text-gray-400 text-sm">Rep</p>
        </div>
        <div className="bg-base p-6 rounded-xl border-2 border-[var(--primary)] hover:border-white transition">
          <div className="w-24 h-24 mx-auto mb-4 bg-[hsl(160,45%,55%)] rounded-full flex items-center justify-center text-4xl">
            👤
          </div>
          <h4 className="text-xl font-bold text-white mb-2">@the-cerealdev</h4>
          <p className="text-gray-400 text-sm">Developer</p>
        </div>

        

        <div className="bg-base p-6 rounded-xl border-2 border-[var(--primary)] hover:border-white transition">
          <div className="w-24 h-24 mx-auto mb-4 bg-[hsl(270,45%,55%)] rounded-full flex items-center justify-center text-4xl">
            🤖
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Claude AI</h4>
          <p className="text-gray-400 text-sm">AI Teammate</p>
        </div>
      </div>
    </div>


    <div className="bg-base p-8 rounded-2xl border-2 border-[hsl(160,15%,20%)]">
      <h3 className="text-2xl font-bold text-primary mb-6 text-center">
        Built With
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="px-4 py-2 bg-light text-white rounded-lg border">React + Vite</span>
        <span className="px-4 py-2 bg-light text-white rounded-lg border">Tailwind CSS</span>
        {/* <span className="px-4 py-2 bg-light text-white rounded-lg border">AI (Groq/Qwen)</span> */}
        <span className="px-4 py-2 bg-light text-white rounded-lg border">Spline 3D</span>
        <span className="px-4 py-2 bg-light text-white rounded-lg border">Figma</span>
        <span className="px-4 py-2 bg-light text-white rounded-lg border">GitHub</span>
      </div>
    </div>


    <div className="text-center mt-12">
      <p className="text-gray-400 text-sm">
        Created for <strong className="text-[hsl(160,45%,55%)]">WCTD Hackathon 2025 Contact: ajedavid1@gmail.com <a></a> </strong>
      </p>
    </div>

  </div>
</section>
    );
}

export default About;