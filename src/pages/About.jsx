import AboutMe from '@/components/about/AboutMe'
import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className='px-32 text-2xl leading-loose min-h-full max-w-[64%]'>
      <AboutMe className=''>
        Hey there,
        <br/>
        <br/>
        I'm Adicondro. I'm interested in designing meaningful experiences that shape how we interact with visual and technology.
        <br/>
        <br/>
        I'm currently study as an informatics student at Telkom University.
        <br/>
        <br/>
        I am a creative individual with a deep passion for IT, visual, and productivity. I have a strong eye for visual, creating visually engaging works while showcasing skills in creative thinking, leadership, public speaking, and problem solving.
        <br/>
        <br/>
        Let's chat — <Link to={"https://mail.google.com/mail/u/0/#inbox?compose=new"}>adicondro.yusuf@gmail.com</Link>
      </AboutMe>
    </div>
  )
}

export default About
