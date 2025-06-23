import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


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
        <section id='portfolio' className='portfolio'>
          <Portfolio/>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default App;
