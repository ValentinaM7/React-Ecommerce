import './Navbar.css'
import CartWidget from "./CartWidget"
import { Link } from 'react-router';

function NavBar () {
    return (
        <nav className="navBarHP">
            <Link to="/">
                <img style={{height: "70px", width: "70px"}}src="https://res.cloudinary.com/dic68hupx/image/upload/v1760139978/776-7765588_compre-adesivos-com-a-arte-wingardium-leviosa-do_ibikeh.jpg" alt="Logo" />
            </Link>
            <div style={{display: 'flex', gap: "12px", alignItems: "flex-end", listStyle: 'none',}}>
                <Link to= "/house/Gryffindor" style={{color: '#c39a1c', textDecoration: 'none'}}>Gryffindor</Link>
                <Link to="/house/Slytherin" style={{color: '#c39a1c', textDecoration: 'none'}}>Slytherin</Link>
                <Link to="/house/Ravenclaw" style={{color: '#c39a1c', textDecoration: 'none'}}>Ravenclaw</Link>
                <Link to="/house/Hufflepuff" style={{color: '#c39a1c', textDecoration: 'none'}}>Hufflepuff</Link>
                <Link to="/house/None" style={{color: '#c39a1c', textDecoration: 'none'}}>Other characters</Link>
                
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;
