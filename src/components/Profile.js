import React from 'react'
import PFP from '../image/image_lingfung.jpg'

function Profile(props) {

  return (
    <section className='profile'>
      <img src={PFP} className='profile-image'/>
      <div className='profile-text'>
        <h1>Liow Ling Fung</h1>
        <h2>Front End Developer</h2>
      </div>
    </section>
  )
}

export default Profile