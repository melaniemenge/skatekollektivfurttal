import skflogo from '../assets/SKF-logo.png';
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="relative max-w-2xl w-full mx-auto flex flex-col items-center justify-center pt-12 pb-8 px-4">
            {/* Hamburger menu */}
            <div className="absolute top-4 right-4 z-50 ">
                <button
                    className="flex flex-col justify-center items-center w-10 h-10 bg-transparent border-none cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menü öffnen"
                >
                    <span className={`block w-6 h-1 bg-black mb-1 transition ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-1 bg-black mb-1 transition ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-1 bg-black transition ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>
            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center z-50">
                    <button
                        className="absolute top-4 right-4 z-50 w-10 h-10 border-none cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Menü schließen"
                    >
                        <span className="block w-6 h-1 bg-white mb-1 rotate-45 translate-y-2"></span>
                        <span className="block w-6 h-1 bg-white mb-1 opacity-0"></span>
                        <span className="block w-6 h-1 bg-white -rotate-45 -translate-y-2"></span>
                    </button>
                    <nav className="flex flex-col items-center space-y-8">
                        <a href="/" className="text-white text-2xl font-bold hover:text-gray-300">Home</a>
                        <a href="/ueber-uns" className="text-white text-2xl font-bold hover:text-gray-300">Über uns</a>
                        <a href="/projekte-events" className="text-white text-2xl font-bold hover:text-gray-300">Projekte und Events</a>
                        <a href="/mitglied-werden" className="text-white text-2xl font-bold hover:text-gray-300">Mitglied werden</a>
                        <a href="/kontakt" className="text-white text-2xl font-bold hover:text-gray-300">Kontakt</a>
                    </nav>
                </div>
            )}
            <a href="/">
                <img
                    src={skflogo}
                    alt="SKF logo"
                    className="mb-6 w-64 h-64 object-contain sm:w-40 sm:h-40"
                />
            </a>
            
        </div>
    );
};

export default Header;
