import React from 'react'
import {Navbar,Nav,Button, NavbarBrand, Image} from 'react-bootstrap'

const Navigation = () => {
  return (
    <div>
      <Navbar  className="p-3 justify-content-between">
        <Navbar.Brand href='#home'>
            <Image src="vite.svg"/>

        </Navbar.Brand>
        <Nav className='ml-auto'>
          <Nav.Link href='#mentor'>Mentorship</Nav.Link>
          <Button variant='outline-primary'>
            Say Hello!
          </Button>
        </Nav>

      </Navbar>
    </div>
  )
}

export default Navigation
