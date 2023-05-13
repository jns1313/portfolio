import './navbar.scss';
import { useState } from 'react'; 
import { NavLink } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../../assets/j-niemi-logo-e.png'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const sidebarHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeSidebar = () => {
        setIsMenuOpen(false);
    }

    return(
        <>
        <nav>
            <div className="logo-container">
                <img src={Logo} alt="logo" />
            </div>
            <ul className="nav-items">
                <li>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
            </ul>
            <div className="burger-menu" onClick={sidebarHandler}>
                <BiMenuAltRight className="burger-icon" />
            </div>
        </nav>
        <div className={ isMenuOpen ? 'overlay overlay-active' : 'overlay' }>
            <button className="close-btn">
                <AiOutlineClose className="close-icon" onClick={closeSidebar} />
            </button>
            <ul className="sidebar-items">
                <li>
                    <NavLink className="nav-link" to="/" onClick={closeSidebar}>Home</NavLink>
                </li>                    
                <li>
                    <NavLink className="nav-link" to="/about" onClick={closeSidebar}>About</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/projects" onClick={closeSidebar}>Projects</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/contact" onClick={closeSidebar}>Contact</NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Navbar;