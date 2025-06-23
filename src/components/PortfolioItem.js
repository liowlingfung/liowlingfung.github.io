import React from 'react'

function PortfolioItem(props) {
  return (
    <>
        <div className='portfolio-card'>
            <h1 className='portfolio-title'>{props.title}</h1>
            <iframe className={`portfolio-site ${props.className}`}
              width={400}
              height={350}
              src={props.src}
            />
            <p className='portfolio-description'>{props.description}</p>
            <a href={props.src} className='button'>{props.buttonDesc ? props.buttonDesc: 'Go to Site'}</a>
        </div>
    </>
  )
}

export default PortfolioItem