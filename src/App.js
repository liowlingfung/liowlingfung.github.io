import './App.css';
import LOGO from './logo/LogoImport';
import React, { useRef } from 'react'
import Profile from './components/Profile';
import NavList from './components/NavList';
import Skill from './components/Skill';
import Button from './components/Button';
import TwitterClone from './image/twitter-clone-website.png'
import resumeURL from './documents/Resume_Liow_Ling_Fung.pdf'

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
      <Profile name='Liow Ling Fung' position='Web Developer'/>

      <div className='mastery'>
        <Skill 
          skillName='React'
          logo={LOGO.logoReact}
          />
        <Skill 
          skillName='Laravel'
          logo={LOGO.logoLaravel}
          />  
          <Skill 
            skillName='PHP'
            logo={LOGO.logoPHP}
            />
          <Skill 
            skillName='Git' 
            logo={LOGO.logoGit}
            />
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
      </div>
      
    </div>

    <hr></hr>

    <div className='content'>
      <h1 id="portfolio" ref={portfolioRef}></h1>
        <div className='showcase'>
        
            <div name='laravel'>
              <h1 className='showcase'>Laravel</h1>
              <h3 className='showcase'>Twitter Clone</h3>
              <img src={TwitterClone} alt="ideas-twitter-clone-screenshot" width="50%" height="50%"></img>
              <Button 
                link="http://ideas-twitter-clone.infinityfreeapp.com/"
                buttonName="Go To Website"
              />
            </div>
            
    
            <hr></hr>
    
            <div name='react'>
             <h1 className='showcase'>React</h1>
             <h3 className='showcase'>To Do List</h3>
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

            <div name='game'>
            <h1 className='showcase'>Game(FYP)</h1>
             <h3 className='showcase'>The 2D Platformer Game</h3>
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
            </div>
        </div>
    </div>

    <div className='content'>
      <h1 id="about" ref={aboutRef}>About</h1>
        <p className='contact'>
          Resume : 
          <a className='popup' download="Resume_Liow_Ling_Fung" href={resumeURL}>Resume Liow Ling Fung.pdf  
            <span className='popuptext' id="myPopup">Downloading</span>
          </a>
        </p>

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
