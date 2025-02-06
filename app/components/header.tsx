'use client';

import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx'; // Add this import for the hamburger icon

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky animate-fadeIn top-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl group cursor-pointer border-2 border-green-400/50 rounded-3xl uppercase font-bold px-4 py-2 hover:shadow-[0_0_15px_rgba(74,222,128,0.5)] transition-all duration-1000">
          <span className="text-white transition-colors duration-300 group-hover:text-green-400">
            Dontre{" "}
          </span>
          <span className="text-green-400 transition-colors duration-300 group-hover:text-white">
            Quarles
          </span>
          <div>
            <TypeAnimation
              sequence={[".com", 2000, "", 2000]}
              speed={99}
              deletionSpeed={99}
              repeat={Infinity}
              className="text-white transition-colors duration-300 group-hover:text-white"
            />
          </div>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-white text-lg transition-all duration-300 hover:animate-pulse hover:text-green-400 hover:text-2xl hover:font-bold border-b-2 border-transparent hover:border-green-400 py-1 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-white text-lg transition-all duration-300 hover:animate-pulse hover:text-green-400 hover:text-2xl hover:font-bold border-b-2 border-transparent hover:border-green-400 py-1 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-white text-lg transition-all duration-300 hover:animate-pulse hover:text-green-400 hover:text-2xl hover:font-bold border-b-2 border-transparent hover:border-green-400 py-1 cursor-pointer"
          >
            Connect
          </Link>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdxLDLRzVQ0c5PkZiV0LSlBI4w1-bY48iLi-0DVJ7o8s2GbAQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg transition-all duration-300 hover:animate-pulse hover:text-green-400 hover:text-2xl hover:font-bold border-b-2 border-transparent hover:border-green-400 py-1 cursor-pointer"
          >
            I&apos;ll Build It (Maybe)
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200"
          title="Toggle menu"
        >
          <RxHamburgerMenu size={24} className="text-green-400" />
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-900 md:hidden justify-center items-center flex flex-col py-4">
            <div className="px-4 py-4 space-y-4">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="block text-white hover:text-green-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="block text-white hover:text-green-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="block text-white hover:text-green-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Connect
              </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdxLDLRzVQ0c5PkZiV0LSlBI4w1-bY48iLi-0DVJ7o8s2GbAQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-green-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                I&apos;ll Build It (Maybe)
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}