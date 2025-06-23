import React from 'react'

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <nav id='navbar'>
        <ul>
            <li>
              <a href='#profile' onClick={(e) => {
                e.preventDefault();
                scrollToSection('profile')}
                }>Home</a>
            </li>
            <li>
              <a href='#portfolio' onClick={(e) => {
                e.preventDefault();
                scrollToSection('portfolio')}
                }>Portfolio</a>
            </li>
            <li>
              <a href='#about' onClick={(e) => {
                e.preventDefault();
                scrollToSection('about')}
                }>About</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar