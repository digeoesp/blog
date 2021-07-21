import { useContext } from "react";
import { Link } from "react-router-dom"
import { Context } from "../../context/Context"
import "./topbar.css"


export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
    return (
        <div className="top">
            <div className='topLeft'>
                <i className="topIcon fab fa-linkedin-in"></i>
                <i className="topIcon fab fa-twitter"></i>
                <i className="topIcon fab fa-github"></i>
                <i className="topIcon fas fa-id-badge"></i>
            </div>
            <div className='topCenter'>
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/" >Home</Link></li>
                    <li className="topListItem"><Link className="link" to="/" >About</Link></li>
                    <li className="topListItem"><Link className="link" to="/" >Contact</Link></li>
                    <li className="topListItem"><Link className="link" to="/write" >Write</Link></li>
                    <li className="topListItem" onClick={handleLogout}>{user && "Logout"}</li>
                </ul>
            </div>
            <div className='topRight'>
                {user ? (<img className="topImg" src="https://res.cloudinary.com/dstqqskiw/image/upload/v1626654667/1618561267723_dev87e.png" alt="avitar" />)
                    : (
                        <ul className="topList">
                            <li className="topListItem">

                                <Link className="link" to="/login" >
                                    Login
                                </Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register" >
                                    Register
                                </Link>
                            </li>
                        </ul>
                    )}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
