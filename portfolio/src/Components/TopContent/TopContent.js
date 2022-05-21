import React from 'react'
import {Link} from 'react-scroll'
import '../TopContent/TopContent.css'

function TopContent() {
  return (
    <div className='topContent'>
        <div className='topContent__Container'>
            <h1>Mr.Abhinand P</h1>
            <p>A Professional Web Developer</p>
            <a href='www.google.com'>
                <button className='topContent__downloadButton'>Download CV</button>
            </a>

            <Link to='projects'smooth={true} duration={500}>
                <button className='topContent__workButton'>My Works</button>
            </Link>

        </div>
    </div>
  )
}

export default TopContent