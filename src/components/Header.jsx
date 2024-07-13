import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
        {/* Navbar Box */}
      <header className='flex flex-row justify-between items-center h-32 px-28 py-24 space-x-4'>

        {/* Organize Navbar Item */}
            <div className='' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <Link to="/">
                <Button className={`text-xl ${isHovered ? 'hidden' : ''}`} variant="custom">
                  Adicondro
                </Button>
              </Link>
              <Link to="/">
                <Button className={`text-xl ${isHovered ? '' : 'hidden'}`} variant="custom">
                  733Visual
                </Button>
              </Link>
            </div>

            {/* Organize Item Alignment */}
            <div className='space-x-4'>
                {/* <Link to="/">
                    <Button className="text-xl" variant="custom">
                        Works
                    </Button>
                </Link> */}
                <Link to="/about">
                    <Button className="text-xl" variant="custom">
                        About
                    </Button>
                </Link>
                <Link to="/about">
                    <Button className="text-xl" variant="custom">
                        Articles
                    </Button>
                </Link>
            </div>
      </header>
    </div>
  )
}

export default Header
