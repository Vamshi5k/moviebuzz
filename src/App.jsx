import React, { useState } from 'react';
import Search from './components/Search';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="relative">
      {/* Full-screen background image */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('./BG.png')" }} />
      
      <div className="relative z-10">
        <div className="pattern" />

        <div className="wrapper">
          <header>
            <img src="./hero-img.png" alt="Logo_Image" className="w-80" />
            <h1>Find <span className="text-gradient">Movies</span> You' ll Enjoy Without The Hassel</h1>
          </header>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <p>Search</p>
        </div>
      </div>
    </main>
  );
};

export default App;
