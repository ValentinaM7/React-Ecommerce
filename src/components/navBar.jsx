import './Navbar.css'
import CartWidget from "./CartWidget"
import { Link } from 'react-router';

function NavBar () {
    return (
        <nav className="navBarHP">
            <a href="">Logo tienda</a>
            <ul style={{display: 'flex', gap: "12px", alignItems: "left"}}>
                <a color='#c39a1c' href="/">Hogwarts Students</a>
                <a color='#c39a1c' href="/">Hogwarts Staff</a>
                <a color='#c39a1c' href="/">Characters</a>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;
