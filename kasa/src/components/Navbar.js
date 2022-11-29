import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <Link to='/'>Acceuil</Link>
            <Link to='/apartement'>Appartement</Link>
            <Link to='/about'>About</Link>
            <Link to='*'>Error_dev</Link>
        </nav>
    )
}