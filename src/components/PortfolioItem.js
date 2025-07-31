import React from 'react'

function PortfolioItem(props) {
  return (
    <>
        <div className='portfolio-card'>
            <h1 className='portfolio-title'>{props.title}</h1>
            <iframe className={`portfolio-site ${props.className}`}
              width={320}
              height={280}
              src={props.src}
            />
            <p className='portfolio-description'>{props.description}</p>
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <a href={props.src} className='button'>{props.buttonDesc ? props.buttonDesc: 'Go to Site'}</a>
              {
                props.downloadButton ?
                <a
                  href={props.downloadSrc}
                  className='button'
                >
                    { props.downloadButton }
                </a> : null
              }
            </div>
        </div>
    </>
  )
}

export default PortfolioItem