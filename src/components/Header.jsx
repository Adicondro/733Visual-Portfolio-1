import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        {/* Navbar Box */}
      <header className='flex flex-row-reverse items-center h-32 p-24 space-x-4'>

        {/* Organize Navbar Item */}

            {/* Organize Item Alignment */}
            <div className='flex space-x-4'>
                
                <Link to="/">
                    <Button className="text-xl" variant="custom">
                        Home
                    </Button>
                </Link>
                <Link to="/about">
                    <Button className="text-xl" variant="custom">
                        About
                    </Button>
                </Link>
            </div>
      </header>
    </div>
  )
}

export default Header
