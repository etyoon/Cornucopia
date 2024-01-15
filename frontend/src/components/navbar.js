import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
const Navbar = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <div className = "nav_bar">
        <div id = "nav_container">
            <img src = {require("../static/logo.png")} alt = "LOGO"/>
            <div class = "left">
                {user && (
                    <div>
                        <ul>
                            <li>
                                <a onClick={handleClick}>Logout</a>
                            </li>
                        </ul> 
                    </div>
                )}
                {!user && (
                    <div>
                        <ul>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to='/signup'>Signup</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <div class = "right">
                <ul>
                    <li><Link to='/'>Fridge</Link></li>
                    <li><a>Favorites</a></li>
                    <li><a>Profile</a></li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Navbar;