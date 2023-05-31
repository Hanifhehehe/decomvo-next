import Link from 'next/link';
import React from 'react'
import MenuItem from '../navbar/MenuItem';
import Container from '../Container';
import Logo from '../Logo';

function Footer() {
  return (
    <Container>
        <div className='flex'>
            <div>
                <h4 className='font-bold'>Über</h4>
                <div className='text-xs'>
                    <MenuItem path="/collaboration" label="Kooperation"/>
                    <MenuItem path="/datenschutz" label="Datenschutzerklärung"/>
                    <MenuItem path="/impressum" label="Impressum"/>
                    <MenuItem path="/contact" label="Kontakt"/>
                </div>
            </div>
            <div>
                <Logo/>
            </div>
        </div>
    </Container>
  );
}

export default Footer