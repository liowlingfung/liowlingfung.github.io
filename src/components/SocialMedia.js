import React from 'react'

function SocialMedia(props) {
    const src = props.src;
    const href = props.href;
    const description = props.description;
    const name = props.name
  return (
    <>
    <a id={name} name={name} href={href} className='hyperlink-description footer-item'>
        <img
        width='40px'
        height='40px'
        src={src}
        />
    {description}
    </a>
    </>
  )
}

export default SocialMedia