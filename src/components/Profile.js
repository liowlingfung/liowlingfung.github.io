import React from 'react'
import PFP from '../image/image_lingfung.jpg'
import resumeURL from "../documents/Resume_Liow_Ling_Fung.pdf"

function Profile(props) {

  return (
    <>
      <section className='profile' id='profile'>
          <img src={PFP} className='profile-image'/>
          <div className='profile-text'>
            <h1>Liow Ling Fung</h1>
            <h2>Front End Developer</h2>
            <p>-Complexity is the key to make things work, while simplicity makes it approachable.</p>
          </div>
      </section>
      <section style={
          {
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }
        }>
            <a
              href={resumeURL}
              download="Resume_Liow_Ling_Fung.pdf"
              className='button'
              style={
              {
                padding:"30px",
                maxWidth:"500px"
              }
            }
            >
              Download Resume
            </a>
      </section>
    </>
  )
}

export default Profile