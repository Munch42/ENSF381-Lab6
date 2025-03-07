import About from './About';
import './App.css';
import React from 'react';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Home title={"Home Page"} description={"Welcome to our website."} />
      <About title={"About Us"} description={"We are passionate about delivering quality experiences."} />
      <Contact title={"Contact Us"} description={"Feel free to reach out to us via email or phone."}/>
    </div>
  );
}

export default App;
