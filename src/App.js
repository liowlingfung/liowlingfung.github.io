import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';


function App() {
  // function popUp(text){
  //   var popup = document.getElementById("myPopup");
  //   popup.classList.toggle("show");
  //   navigator.clipboard.writeText(text)
  // }



  return (
    <>
      <Navbar/>
      <main>
        <Profile/>
        <section  className='portfolio'>
          <Portfolio/>
        </section>
      </main>
    </>
  );
}

export default App;
