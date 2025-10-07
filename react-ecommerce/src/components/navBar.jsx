import './Navbar.css'
import CartWidget from "./CartWidget"

function NavBar () {
    return (
        <nav className="navBarHP">
            <a href="">Logo tienda</a>
            <ul>
                <a color='#c39a1c' href="/">Hogwarts Students</a>
                <a color='#c39a1c' href="/">Hogwarts Staff</a>
                <a color='#c39a1c' href="/">Characters</a>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;
