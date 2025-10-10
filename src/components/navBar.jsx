import './Navbar.css'
import CartWidget from "./CartWidget"
import { Link } from 'react-router';

function NavBar () {
    return (
        <nav className="navBarHP">
            <a href>
                <img style={{height: "70px", width: "70px"}}src="https://res.cloudinary.com/dic68hupx/image/upload/v1760139978/776-7765588_compre-adesivos-com-a-arte-wingardium-leviosa-do_ibikeh.jpg" alt="Logo" />
            </a>
            <ul style={{display: 'flex', gap: "12px", alignItems: "flex-end", listStyle: 'none',}}>
                <li><a href="/" style={{color: '#c39a1c', textDecoration: 'none'}}>Hogwarts Students</a></li>
                <li><a href="/" style={{color: '#c39a1c', textDecoration: 'none'}}>Hogwarts Teachers</a></li>
                <li><a href="/" style={{color: '#c39a1c', textDecoration: 'none'}}>Other characters</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;
