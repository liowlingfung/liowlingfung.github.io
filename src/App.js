import './App.css';
import LOGO from './logo/LogoImport';
import React, { useRef } from 'react'
import Profile from './components/Profile';
import NavList from './components/NavList';
import Skill from './components/Skill';
import Button from './components/Button';

function App() {
  const profileRef = useRef(null)
  const portfolioRef = useRef(null)
  const aboutRef = useRef(null)

  function popUp(text){
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    navigator.clipboard.writeText(text)
  }

  return (
    <>
      <nav className='navbar' ref={profileRef}>
        <ul>
          <NavList buttonName='Profile' ref={profileRef}/>
          <NavList buttonName='Portfolio' ref={portfolioRef}/>
          <NavList buttonName='About' ref={aboutRef}/>
        </ul>
      </nav>
    
    <div ref={profileRef}>
      <Profile name='Liow Ling Fung' position='Frontend Developer'/>

      <div className='mastery'>
        <Skill 
          skillName='HTML'
          logo={LOGO.logoHTML}
          />
        <Skill 
          skillName='CSS' 
          logo={LOGO.logoCSS}
          />
        <Skill 
          skillName='JavaScript'
          logo={LOGO.logoJS}
          />
        <Skill 
          skillName='React'
          logo={LOGO.logoReact}
          />
        <Skill 
          skillName='PHP'
          logo={LOGO.logoPHP}
          />
        <Skill 
          skillName='Python' 
          logo={LOGO.logoPython}
          />
        <Skill 
          skillName='C++' 
          logo={LOGO.logoCPP}
          />
        <Skill 
          skillName='C#' 
          logo={LOGO.logoCSharp}
          />
        <Skill 
          skillName='Java' 
          logo={LOGO.logoJava}
          />
        <Skill 
          skillName='TypeScript' 
          logo={LOGO.logoTypeScript}
          />
        <Skill 
          skillName='Unreal Engine 5' 
          logo={LOGO.logoUE5}
          />
        <Skill 
          skillName='Git' 
          logo={LOGO.logoGit}
          />
      </div>
      
    </div>

    <hr></hr>

    <div className='content'>
      <h1 id="portfolio" ref={portfolioRef}></h1>
      
        <div className='showcase'>
          <h1 className='showcase'>Game Project</h1>
           <h3 className='showcase'>Gameplay Video Showcase</h3>
            <div>
           <iframe
            width="800"
            height="400"
            src={`https://www.youtube-nocookie.com/embed/5uRDtLSMPkM?si=PBBPYIOUzE-5IRFB?allowfullscreen`}
            title="YouTube Video Player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen" 
            referrerpolicy="strict-origin-when-cross-origin"> 
           </iframe>
            <Button 
              link="https://drive.google.com/file/d/1lwZtyE7859AtLP847tozB0wW0QSixtSr/view?usp=sharing" 
              buttonName="Download Game"
              />
          </div>

          <hr></hr>

          <div>
           <h1 className='showcase'>React Project</h1>
           <h3 className='showcase'>To Do List Website</h3>
           <iframe 
            src="https://todolist-lingfung.netlify.app/" 
            width="800" 
            height="400">
            </iframe>
           <p className='showcase'>(No, it is not an image, you can interact it. Try by typing something and then enter.)</p>
           <Button 
              link="https://todolist-lingfung.netlify.app/"
              buttonName="Go To Website"
            />
            </div>

            <hr></hr>

           <h3 className='showcase'>Laravel Website Project(Tutorial)</h3>
           <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.642529475826!2d-73.98550479999998!3d40.7577301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f0b37%3A0x4cfeb3b8768b2723!2sGrand%20Central%20Terminal%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1691105840759!5m2!1sen!2sus" 
            width="600"
            height="450"
            frameborder="0"
            allowfullscreen=""
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>   
    </div>

    <div className='content'>
      <h1 id="about" ref={aboutRef}>About</h1>
      <p className='contact'>
        Email : 
        <a className='popup'onClick={() => popUp("liowlingfung0116@gmail.com")}>liowlingfung0116@gmail.com 
          <span className='popuptext' id="myPopup">Copied!</span>
        </a>
      </p>

      <p className='contact'>
        Phone : 
        <a className='popup'onClick={() => popUp("016-6010755")}>016-6010755 
          <span className='popuptext' id="myPopup">Copied!</span>
        </a>
      </p>
    </div>
    

    </>
  );
}

export default App;
