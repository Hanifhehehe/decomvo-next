import React from 'react'
import Container from '../Container'
import Logo from '../Logo'
import NavbarMenu from './NavbarMenu'

function Navbar() {
    return (
      <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-4 border-b-[1px]">
          <div>
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0 sm:gap-10">
              <Logo />
              <NavbarMenu />
            </div>
          </Container>
          </div>
        </div>
      </div>
    );
}

export default Navbar