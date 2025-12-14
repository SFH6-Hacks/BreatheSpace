
// const name = localStorage.getItem('name');
// const mood = localStorage.getItem('Mood');
// function Dashboard({ onStart }) {
//     return(
//         <>
//         <h1>DashBoard</h1>
//         <button onClick={onStart}>Go to Landing</button>
//         </>
//     );
// }



// src/pages/Dashboard.jsx
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [weekMoods, setWeekMoods] = useState([]);
  const [streak, setStreak] = useState(0);
  const [totalDays, setTotalDays] = useState(0);
  const [recentEntries, setRecentEntries] = useState([]);
  const [messagesLeft] = useState(localStorage.getItem('name')==='guest' ? 7:0);


  useEffect(() => {
    
    const storedMoods = JSON.parse(localStorage.getItem('moods') || '[]');
    setWeekMoods(storedMoods.slice(-7)); 
    setSelectedMood(localStorage.getItem('mood'));

    setStreak(parseInt(localStorage.getItem('streak') || '0'));
    

    setTotalDays(parseInt(localStorage.getItem('totalDays') || '0'));
    

    const storedEntries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
    setRecentEntries(storedEntries.slice(-3).reverse()); // Last 3, newest first

    // Check if already checked in today
    const lastCheckIn = localStorage.getItem('lastCheckIn');
    const today = new Date().toDateString();
    if (lastCheckIn === today) {
      const todayMood = localStorage.getItem('todayMood');
      setSelectedMood(todayMood);
    }
  }, []);

  const handleMoodSelect = (mood) => {
    const today = new Date().toDateString();
    
    setSelectedMood(mood);
    
    // Save to localStorage
    localStorage.setItem('lastCheckIn', today);
    localStorage.setItem('todayMood', mood);
    
    // Update moods array
    const updatedMoods = [...weekMoods, { mood, date: today }];
    localStorage.setItem('moods', JSON.stringify(updatedMoods));
    setWeekMoods(updatedMoods.slice(-7));
    
    // Update streak and total
    const newStreak = streak + 1;
    const newTotal = totalDays + 1;
    setStreak(newStreak);
    setTotalDays(newTotal);
    localStorage.setItem('streak', newStreak.toString());
    localStorage.setItem('totalDays', newTotal.toString());
  };

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

  const getDayOfWeek = (index) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date().getDay();
    return days[(today - 6 + index + 7) % 7];
  };

  return (
    <div className="min-h-screen bg-dark p-6 text-toon">
   
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-black text-primary" >
            Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-muted text-sm">{messagesLeft}/10 msgs left</span>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-xl">
              👤
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
     

        <div className="lg:col-span-2 bg-base p-8 rounded-none border-l-4 border-primary clip-path-slant">
          <h2 className="text-2xl font-bold text-primary mb-6 text-toon " >
            {selectedMood ? "You've checked in today!" : "How are you feeling?"}
          </h2>
          
          <div className="flex gap-4 justify-center">
            {moods.map((mood) => (
              <button
                key={mood.label}
                onClick={() => handleMoodSelect(mood.emoji)}
                disabled={selectedMood !== null}
                className={`text-6xl transition-transform hover:scale-125 disabled:opacity-50 disabled:cursor-not-allowed
                  ${selectedMood === mood.emoji ? 'scale-125' : ''}`}
                title={mood.label}
              >
                {mood.emoji}
              </button>
            ))}
          </div>
          
          {selectedMood && (
            <p className="text-center text-primary mt-4">
              Great! Come back tomorrow for your next check-in.
            </p>
          )}
        </div>


        <div className="bg-base p-6 rounded-none border-r-4 border-highlight clip-path-slant-reverse">
          <h3 className="text-xl font-bold text-primary mb-4" 
              style={{WebkitTextStroke: '1px black', color: 'white'}}>
            Your Progress
          </h3>
          <div className="text-center">
            <div className="text-5xl font-black text-primary mb-2">
              {streak} 🔥
            </div>
            <p className="text-muted text-sm">Day Streak</p>
            <p className="text-muted text-xs mt-2">Total: {totalDays} days</p>
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <div className="text-xs text-muted">Badges:</div>
            <div className="flex gap-2 mt-2">
              {streak >= 7 && <span className="text-2xl" title="7 Day Warrior">⭐</span>}
              {totalDays >= 1 && <span className="text-2xl" title="First Check-in">🎯</span>}
            </div>
          </div>
        </div>


        <div className="lg:col-span-3 bg-base p-6 rounded-none border-t-4 border-primary">
          <h3 className="text-xl font-bold text-primary mb-4 text-toon" >
            Your Week
          </h3>
          <div className="flex justify-around items-end">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-2">
                  {weekMoods[i]?.mood || '⚪'}
                </div>
                <div className="text-xs text-muted">{getDayOfWeek(i)}</div>
              </div>
            ))}
          </div>
        </div>

      
        <div className="lg:col-span-1 bg-base p-6 rounded-none border-l-4 border-highlight">
          <h3 className="text-xl font-bold text-primary mb-4" 
             >
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button className="w-full p-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-none border-2 border-black transition"
                    >
              💬 Start AI Chat
            </button>
            <button className="w-full p-3 bg-light hover:bg-base text-primary font-bold rounded-none border-2 border-border transition"
                    >
              📝 New Entry
            </button>
            <button className="w-full p-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold rounded-none border-2 border-black transition"
                   >
              🆘 Crisis Help
            </button>
          </div>
        </div>


        <div className="lg:col-span-2 bg-base p-6 rounded-none border-r-4 border-primary">
          <h3 className="text-xl font-bold text-primary mb-4 text-toon" >
            Recent Entries
          </h3>
          {recentEntries.length > 0 ? (
            <div className="space-y-3">
              {recentEntries.map((entry, i) => (
                <div key={i} className="p-3 bg-light border-l-2 border-primary">
                  <p className="text-primary text-sm">{entry.title || entry.text?.slice(0, 50) + '...'}</p>
                  <p className="text-muted text-xs mt-1">{entry.date}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted text-sm">No journal entries yet. Start writing!</p>
          )}
          <button className="w-full mt-4 p-2 bg-light hover:bg-base text-primary font-bold rounded-none border border-border transition">
            View All Entries
          </button>
        </div>

        {/* Premium Upsell */}
        <div className="lg:col-span-3 bg-base p-8 rounded-none border-4 border-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-primary mb-4 text-toon" >
              🔒 Unlock Premium Analytics
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-light/50 blur-sm">
                <div className="text-4xl mb-2">📊</div>
                <p className="text-muted text-sm">30-Day Trends</p>
              </div>
              <div className="text-center p-4 bg-light/50 blur-sm">
                <div className="text-4xl mb-2">🎯</div>
                <p className="text-muted text-sm">AI Insights</p>
              </div>
              <div className="text-center p-4 bg-light/50 blur-sm">
                <div className="text-4xl mb-2">📄</div>
                <p className="text-muted text-sm">Export Reports</p>
              </div>
            </div>
            <button className="w-full md:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white font-black rounded-none border-4 border-black transition text-lg">
              Upgrade to Premium - £4.99/mo →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}