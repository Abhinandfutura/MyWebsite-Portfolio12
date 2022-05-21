import React from 'react'
import {Element} from 'react-scroll'
import {IconButton} from '@mui/material';
import {Facebook,Instagram,Twitter} from '@mui/icons-material'
import './Contact.css'

function Contact() {
  return (
    <Element id='contact'  className='contact'>
<h1>Contact</h1>
<div className='conatact__container'>
    <p>
        Email:<span>abhinandnadupparambil@gmail.com</span>
    </p>
    <p>
        GitHub Username:<span>AbhinandFutura</span>
    </p>

    <div className='contact__icon'>
        <a href='www.google.com'>

            <IconButton>
                <Facebook/>
                
            </IconButton>
        </a>
        <a href='www.google.com'>

            <IconButton>
                
                <Instagram/>
               

            </IconButton>
        </a>
        <a href='www.google.com'>

            <IconButton>
                
                <Twitter/>

            </IconButton>
        </a>
       
    </div>
</div>

    </Element>
  )
}

export default Contact