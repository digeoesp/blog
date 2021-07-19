import './sidebar.css'

export default function Sidebar() {
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
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
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
