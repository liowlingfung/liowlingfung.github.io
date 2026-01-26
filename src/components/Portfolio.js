import React from 'react'
import PortfolioItem from './PortfolioItem'

function Portfolio() {
  return (
    <>
      <PortfolioItem
        src='https://project-digimon-api--lh48zwqz86.expo.app/'
        title='Digimon App'
        description={`
          This is a simple React Native Github repo that uses Digimon API to display Digimon data.
          `}
        className='web-app'
      />
      <PortfolioItem
        src='https://liowlingfung.github.io/link-management-app'
        title='Link Management App'
        description={`
          Have trouble finding your saved links? This website got you covered!
          `}
        className='web-app'
      />
      <PortfolioItem
        src='https://liowlingfung.github.io/finance-management-app/'
        title='Finance Management App'
        description={`
          Money is the root of poverty. Manage your $ with simple finance management!
          `}
        className='web-app'
      />
      <PortfolioItem
        src='https://liowlingfung.github.io/levelup-sim/'
        title='Level Up Simulator'
        description={`
          Getting bored? Try out a clicking simulator where you can level up!
          `}
        className='web-app'
      />
      <PortfolioItem
        src='https://liowlingfung.github.io/react-todolist/'
        title='Simple To Do List'
        description={`
          Remember to do your tasks with this simple to do list app!
          `}
        className='web-app'
      />
      <PortfolioItem
        src='https://www.youtube.com/embed/5uRDtLSMPkM?si=rUJ_qKgzGfeT0s2R'
        title='2D Platformer Game'
        description={`
          Yes, this is my final year project! It is not really exciting... but!
          It is worth checking since it is the only game project I show in my portfolio!
          `}
        buttonDesc='Go to Video'
        downloadButton='Download'
        downloadSrc="https://drive.google.com/file/d/1lwZtyE7859AtLP847tozB0wW0QSixtSr/view?usp=drive_link"
        className='video'
      />
      <PortfolioItem
        src='https://liowlingfung.github.io/capstone-project/'
        title='Capstone Project'
        description={`
          Hey! I know nobody cares about a capstone project.
          But raw skills are required to build something boring but important.
          So that's why you're here!
          `}
        className='web-app'
      />
    </>
  )
}

export default Portfolio