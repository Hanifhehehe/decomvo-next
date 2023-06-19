import Link from 'next/link';
import React from 'react'
import MenuItem from '../navbar/MenuItem';
import Container from '../Container';
import Logo from '../Logo';

function Footer() {
  return (
    <Container>
        <div className='flex flex-col justify-between md:flex-row'>
            <div className='justify-center align-center'>
                <h4 className='font-bold'>Über</h4>
                <div className='text-xs'>
                    <MenuItem path="/kooperation" label="Kooperation"/>
                    <MenuItem path="/datenschutz" label="Datenschutzerklärung"/>
                    <MenuItem path="/impressum" label="Impressum"/>
                    <MenuItem path="/kontakt" label="Kontakt"/>
                    <MenuItem path="/veranstaltungen" label="Veranstaltungen"/>
                </div>
            </div>
            <div className='justify-center align-center'>
                <Logo/>
            </div>
        </div>
    </Container>
  );
}

export default Footer