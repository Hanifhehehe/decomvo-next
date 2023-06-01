'use client'
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../Logo';

const Header = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <header>
      <nav
        className={`${
          isActive ? 'active' : ''
        } fixed w-80 bg-white right-0 top-0 transition-all duration-400 ease-in-out py-15vh`}
      >
        <div
          className="w-20 h-20 fixed top-8 right-12 cursor-pointer bg-primary rounded-full flex flex-col justify-around"
          onClick={() => setIsActive(!isActive)}
        >
          <div className="w-full h-1 bg-white rounded transition-all duration-400 ease-in-out"></div>
          <div
            className={`w-full h-1 bg-white rounded transition-all duration-400 ease-in-out ${
              isActive ? 'opacity-0' : ''
            }`}
          ></div>
          <div className="w-full h-1 bg-white rounded transition-all duration-400 ease-in-out"></div>
        </div>
        <a href="/">
          <Logo />
        </a>
        <ul className="flex flex-col justify-center items-start">
          <li
            className={`${
              isActive ? 'fade-in' : ''
            } mb-4 ml-6 opacity-0 transition-all duration-400 ease-in-out delay-200`}
          >
            <a href="/">Startseite</a>
          </li>
          <li
            className={`${
              isActive ? 'fade-in' : ''
            } mb-4 ml-6 opacity-0 transition-all duration-400 ease-in-out delay-400`}
          >
            <a href="/about">Über Uns</a>
          </li>
          <li
            className={`${
              isActive ? 'fade-in' : ''
            } mb-4 ml-6 opacity-0 transition-all duration-400 ease-in-out delay-600`}
          >
            <a href="/articles">Beiträge</a>
          </li>
          <li
            className={`${
              isActive ? 'fade-in' : ''
            } mb-4 ml-6 opacity-0 transition-all duration-400 ease-in-out delay-800`}
          >
            <a href="/projekte">Projekte</a>
          </li>
          <li
            className={`${
              isActive ? 'fade-in' : ''
            } mb-4 ml-6 opacity-0 transition-all duration-400 ease-in-out delay-1000`}
          >
            <a href="/veranstaltungen">Veranstaltungen</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
