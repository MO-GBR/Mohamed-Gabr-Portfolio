import React from 'react'
import { useScroll } from '../hooks/useScroll'
import { LINKS } from '../constants';
import { useSelector } from 'react-redux';
import ThemeButton from './ThemeButton';

const Navbar = () => {
    const [{ scrollY }] = useScroll();
    const { mode } = useSelector(state => state.theme);

    const activeLink = (href) => {
        if (href === '#about' && scrollY > 520 && scrollY < 1200) return true;
        if (href === '#service' && scrollY > 1200 && scrollY < 2000) return true;
        if (href === '#skills' && scrollY > 2000 && scrollY < 2800) return true;
        if (href === '#certifications' && scrollY > 2800 && scrollY < 3800) return true;
        if (href === '#work' && scrollY > 3800 && scrollY < 4800) return true;
        if (href === '#contact' && scrollY > 4800 ) return true;
            return false;
    };

    return (
        <header className={
            scrollY > 50 
                ? `${mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'} mt-3 rounded-2xl duration-300` 
                : 'bg-transparent'} >
            <div className='flex-center cursor-pointer'>
                <img src={
                    mode === 'light' 
                        ? scrollY > 50 ? '/icons/white-code.svg' : '/icons/black-code.svg'
                        : scrollY > 50 ? '/icons/black-code.svg' : '/icons/white-code.svg'
                } alt='logo' />
                <p className='logo'>Mohamed</p>
            </div>
            <div>
                <nav>
                    <ul className='flex gap-8 text-lg font-medium'>
                        {
                            LINKS.map((link, index) => (
                                <li key={index}><a href={link.href} className={activeLink(link.href) ? `font-bold p-3 rounded-lg duration-300 ${mode === 'light' ? 'bg-white text-black': 'bg-black text-white'}` : 'hover:text-gray-500'}>{link.title}</a></li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <button className='border p-3 border-gray-400 rounded-2xl cursor-pointer hover:bg-accent'>Hire Me</button>
            <ThemeButton />
        </header>
    )
}

export default Navbar