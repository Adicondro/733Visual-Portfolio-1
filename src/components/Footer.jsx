import React from 'react'

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
                <span className='text-gray-500'>Linkedin, Email, Instagram</span>
            </div>
    </footer>
  )
}

export default Footer
