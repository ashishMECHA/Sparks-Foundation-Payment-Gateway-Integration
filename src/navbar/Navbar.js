import React from 'react'
import SvgComponent from './SvgComponent'
import Type from './TypeWriter'
import Button from '@mui/material/Button';


export default function Navbar() {
    
  return (
    <div className='container'>
        <nav>
        <ul className="navlinks">
                <li>
                    <img className="logo"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAaFJREFUSEvFVU1Kw0AU/l6dihihEVNwZ29gPYHxBOpWIsQTSG+gN4gnMKXVrfUE1hNYb5Cl0IBdNCA0zZNpU6hp/qZQHMiq89437/t5JWz40Ib74/8Bdg7txlY4vQXYBNCcTczsgchjoE8UvQbD50EWE7kTaPVrG8yPRTQScD/2u3dp9zIBdg+sCyK8FDWf/86twH9ylAA0w5JjH5cBIOBs7Hf7qgCcLGDGZVQVAxGGDQY3CTAZdF4Nxf5o5I5KA2j1qya48rFSQNFJUlBpgp8v11MWWTOslQkAjBhwIiHaeU2XwTJF1gxLcnqa87IegIcs7hd1mQBz/4dS6Fq+0OQEfqelTJEsiLVwi9y0Vg6WXxQHzs6jLMtJSrtI0ibCiSOtmaQkKwu5Sd6ein6av1NDSHQTDDuSzj8nz0UyODUCeszcI6p4Y7/zHq8QuZ/0hB1T05wKoOu2PhHhd5k1sbijpMGeYZkMvJUFUHZRDCD5PCoEIbSDYVc6LPXkumjGN2CCZn808luE7hOEATHctZNc+PKSF5RyULJnOZuu0yyt5hfKeZ4ZfxuKMAAAAABJRU5ErkJggg==" />
                </li>
                <li><a href="#">HOME</a></li>
                <li><a href="#">PAGES</a></li>
                <li><a href="#">DONATION</a></li>
                <li><a href="#">EVENTS</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="https://www.linkedin.com/in/ashish-thakur-065565217/">CONNECT</a></li>
                <li><a className="cta" href="https://rzp.io/l/se7rovCh">DONATE</a></li>
            </ul>
        </nav>

        <div className="pageContent">
            <div className="textContent">
                <p className="heading">YOU CAN MAKE THE DIFFERENCE</p>
                <p className="heading2">Donate Fundraise And</p>
                <p className="heading3">Volunteer</p>
                <span className="text"><Type/></span>
                <div className="btn">
                    {/* <button id="btn1" onClick={donate}>MAKE A DONATION</button> */}
                    <Button href='https://rzp.io/l/se7rovCh'
      variant="contained"
      id='btn1'
    >
      MAKE A DONATION
    </Button>
    <Button href='https://github.com/ashishMECHA'
      variant="contained"
      id='btn2'
    >
      Learn more
    </Button>
                </div>
            </div>
            
        </div>
    </div>
  )
}
