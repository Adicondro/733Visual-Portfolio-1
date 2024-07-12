import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex flex-row items-center justify-between px-32 my-20 '>

            <div className='flex flex-col text-sm gap-2'>
                <p>Adicondro</p>
                <span className='text-gray-500'>Creator and Designer</span>
            </div>
            <div className='flex flex-col text-sm gap-2'>
                <p>Contact</p>
                <span className='text-gray-500'>+62811129929</span>
            </div>
            <div className='flex flex-col text-sm gap-2'>
                <p>Social</p>
                <span className='text-gray-500'>
                  <Link to={"https://linkedin.com/in/adicondro"}>Linkedin,</Link> <Link to={"https://mail.google.com/mail/u/0/#inbox?compose=new"}>Email</Link>, <Link to={"https://instagram.com/adicndro"}>Instagram</Link>
                  </span>
            </div>
    </footer>
  )
}

export default Footer
