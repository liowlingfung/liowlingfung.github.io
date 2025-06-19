import React from 'react'
import Navlist from './NavList'

function Navbar() {
  return (
    <nav id='navbar'>
        <ul>
            <Navlist navList={`Main`}/>
            <Navlist navList={`Portfolio 1`}/>
            <Navlist navList={`Portfolio 2`}/>
            <Navlist navList={`Protfolio 3`}/>
        </ul>
    </nav>
  )
}

export default Navbar