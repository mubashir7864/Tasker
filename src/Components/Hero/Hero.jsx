import React from 'react'
import "./hero.css"
import heroimg from "../../Assets/Images/hero_img.jpg"

const Hero = () => {
  return (
    <div className='Hero-container'>
        <div className="hero-img-container">
            <img src={heroimg} alt="hero-image" className='hero_img' />
        </div>
        <div className="hero-content-container">
            <div className='hero-content'>
            <h1 className='hero-title'>Organize Your Life <br /> and Work.</h1>
            <div className="hero-desc-container">
            <p className='hero-desc'>Become focused, organized, and calm with Tasker.</p>
            </div>
            <div className="hero-btn-container">
            <button className='hero-btn'>Get Started</button>
            </div>
            </div>
        </div>   
    </div>
  )
}

export default Hero