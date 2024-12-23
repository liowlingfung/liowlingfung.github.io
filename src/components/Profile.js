import React from 'react'
import PFP from '../image/image_lingfung.jpg'

function FComp_Profile(props) {

  return (
    <div className='profile'>
      <img src={PFP}></img>
      <h1>{props.name}</h1>
      <p>{props.position}</p>
    </div>
  )
}

export default FComp_Profile