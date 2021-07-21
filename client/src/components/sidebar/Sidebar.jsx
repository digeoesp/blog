import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import './sidebar.css'

export default function Sidebar() {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://res.cloudinary.com/dstqqskiw/image/upload/v1626654667/1618561267723_dev87e.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nihil perspiciatis quisquam culpa reiciendis provident distinctio pariatur accusantium eius doloremque. Odit ut saepe ducimus alias reiciendis quis autem laborum tempora.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {cats.map((c, index) => (
                        <Link to={`/?cat=${c.name}`} className='link'>
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>

                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-linkedin-in"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-github"></i>
                    <i className="sidebarIcon fas fa-id-badge"></i>
                </div>
            </div>

        </div>
    )
}
