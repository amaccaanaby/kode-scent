import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

    return (

        <nav className="sticky top-0 z-100 bg-white border-b h-15 flex flex-row items-center justify-between px-6">
            <Link to="/" className="hover:opacity-70 transition-opacity">
                <h1 className="text-xl font-bold logo-font tracking-[0.3em]">
                KŌDE
                </h1>
            </Link>
 
            <div className='hidden md:flex flex-row items-center gap-9'>
                <Link to="/" className="text-xs tracking-[0.2em] font-medium text-black hover:text-gray-300 transition-colors">Home</Link>
                <Link to="/concept" className="text-xs tracking-[0.2em] font-medium text-black hover:text-gray-300 transition-colors">Concept</Link>
                <Link to="/variant" className="text-xs tracking-[0.2em] font-medium text-black hover:text-gray-300 transition-colors">Variant</Link>
            </div>

            <button className="md:hidden flex flex-col gap-1.5 z-101" 
                onClick={() => setIsOpen(!isOpen)}>
                <span className={`h-0.5 w-5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 w-5 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            <div className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-20 transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <Link to="/" onClick={() => setIsOpen(false)} className="text-lg tracking-[0.2em] text-black hover:text-gray-300 font-medium">Home</Link>
                <Link to="/concept" onClick={() => setIsOpen(false)} className="text-lg tracking-[0.2em] text-black hover:text-gray-300 font-medium">Concept</Link>
                <Link to="/variant" onClick={() => setIsOpen(false)} className="text-lg tracking-[0.2em] text-black hover:text-gray-300 font-medium">Variant</Link>
            </div>
        </nav>
    )
}

export default Navbar;