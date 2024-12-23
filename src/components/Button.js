import React from 'react'

function Button(props) {
    const handleButtonClick = () =>{
        window.open(props.link , '_blank');
    };

  return (
    <div>
        <button className='learn-more' onClick={handleButtonClick}>{props.buttonName}</button>
    </div>
  );
}

export default Button