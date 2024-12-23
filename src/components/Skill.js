import React from 'react'

function Skill(props) {
  return (
    <div className='skills'>
        <img src={props.logo}></img>
        <p>{props.skillName}</p>
    </div>
  )
}

export default Skill