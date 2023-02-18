import { Link } from 'react-router-dom';
import { UseLogout } from '../hooks/UseLogout';
import { useAuthContext } from '../hooks/UseAuthContext';
const Navbar = () => {
    const { user } = useAuthContext();
    const { logout } = UseLogout()
    const handleClick = () => {
        logout()
    }
    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Workout Buddy</h1>
                </Link>
                <nav>
                    {user && (<div>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>Log out</button>
                    </div>
                    )}
                    {!user && (<div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;