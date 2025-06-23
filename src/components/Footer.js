import React from 'react'
import SocialMedia from './SocialMedia'

function Footer() {
  return (
    <footer>
        <div id='about' className='contact-info'>
            <h2>Contact Info</h2>
            <p className='footer-item'>Location: Ampang, Selangor</p>
            <p className='footer-item'>Email: liowlingfung@0116@gmail.com</p>
            <p className='footer-item'>Phone Number: +60 16 601 0755</p>
        </div>
        <div className='social-media-info'>
          <h2>Social Media</h2>
            <SocialMedia
              name='github'
              src='https://img.icons8.com/?size=100&id=lkh3AbJLmFpp&format=png&color=000000'
              href='https://github.com/liowlingfung'
              description='Github Profile'
            />
            <SocialMedia
              name='linkedin'
              src='https://img.icons8.com/?size=100&id=114445&format=png&color=000000'
              href='https://www.linkedin.com/in/ling-fung-liow-06b143308/'
              description='LinkedIn Profile'
            />
        </div>
    </footer>
  )
}

export default Footer