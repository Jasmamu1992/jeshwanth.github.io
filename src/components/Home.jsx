import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from './AnimatedLetters'
import LogoTitle from '../assets/images/logoN.png'
import './Home.scss'
import jeshResume from '../assets/doc/jeshwanth.challagundla.pdf'

function Home() {
    const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = 'eshwanth'.split('')
  const jobArray = 'Software Developer'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="Nethra Mugala" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
          </h1>
          <h2>
            Machine Learning Engineer
          </h2>
          <Link to="/jeshwanth.github.io/contact" className="flat-button">
            CONTACT ME
          </Link>
          <a href={jeshResume} target='_blank' className="flat-button">
            RESUME
          </a>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home