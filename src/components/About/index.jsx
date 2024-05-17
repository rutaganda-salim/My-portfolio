import React from 'react'
import "./About.css"
import { profile10 } from '../../assets/images'

const About = () => {
  return (
    <section id='about'>
      <div className="container">
         <div className="photo__container">
           <div className="primary__effect picture">
            <img src={profile10} alt="" />
           </div>
         </div>
         <div className="details">
          <h3><span className="text__gradient">About</span> Me</h3>
          <h1>I am <span className="color__primary">Rutaganda Salim</span></h1>
          <h2>An Enthusiastic Fullstack Developer</h2>
          <p className="text__muted description">
          Welcome to my corner of the digital realm! I'm a fervent fullstack developer with a talent for sculpting groundbreaking web solutions that seamlessly fuse functionality with exquisite design. Possessing a robust proficiency in both front-end and back-end technologies, I excel in transforming concepts into fruition through meticulous code and user experiences that are both intuitive and captivating.
          </p>
          <a href="#contact" className='btn btn__primary'>Contact Me</a>
         </div>
      </div>
    </section>
  )
}

export default About
