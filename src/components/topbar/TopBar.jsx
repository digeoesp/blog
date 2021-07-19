import "./topbar.css"


export default function TopBar() {
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
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className='topRight'>
                <img className="topImg" src="https://res.cloudinary.com/dstqqskiw/image/upload/v1626654667/1618561267723_dev87e.png" alt="avitar" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
