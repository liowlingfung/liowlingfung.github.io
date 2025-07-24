import React from 'react'
import PortfolioItem from './PortfolioItem'

function Portfolio() {
  return (
    <>
      <PortfolioItem
        src='https://liowlingfung.github.io/capstone-project/'
        title='Capstone Project'
        description={`
          This capstone project is made from
          Meta's Front End Developer course as a proof
          of understanding every knowledge during the course.
          Which includes React basics and React Hooks,
          Figma wireframe & protoype design(UI/UX),
          Jest JavaScript testing framework,
          Git & Github which also known as DVCS(Distributed Version Control Systems)
          `}
        className='web-app'
      />
      <PortfolioItem
        src='https://liowlingfung.github.io/levelup-sim/'
        title='Level Up Simulator'
        description={`
          This project is a level up simulator where you can level up with
          randomly given experience points to level up. This project also
          keep tracks of your highest level and highest experience points gained.
          `}
        className='web-app'
      />
      <PortfolioItem
        src='https://www.youtube.com/embed/5uRDtLSMPkM?si=rUJ_qKgzGfeT0s2R'
        title='2D Platformer Game'
        description={`
          This is an individual based Final Year Game Project made using Unreal Engine 5 with Blueprint Systems(Visual Programming)
          The gameplay is similar to Super Mario Bros but with different combat mechanics.
          There are several systems designed such as difficulty system, currency & shopping system and stage selection.
          All assets and animation in the game are self made.
          `}
        buttonDesc='Go to Video'
        className='video'
      />
      <PortfolioItem
        src='https://liowlingfung.github.io/finance-management-app/'
        title='Finance Management App'
        description={`
          This project is made to simplify financial tracking and free to use for any people.
          You want to take a look of an overview that when you had spent or earn?
          This is the app for anyone who needs that!
          No ads, no blabbering just a simple finance management website.
          `}
        className='web-app'
      />

    </>
  )
}

export default Portfolio