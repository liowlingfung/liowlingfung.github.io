import React from 'react'

function FComp_NavButton(props) {
  const scrollToSection = () => {
    props.ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <li onClick={scrollToSection}>{props.buttonName}</li>
  )
}

export default FComp_NavButton