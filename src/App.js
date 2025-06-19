import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Profile from './components/Profile';


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
      </main>
    </>
  );
}

export default App;
