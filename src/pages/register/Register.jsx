import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label> Email</label>
                <input className="registerInput" type="text" placeholder="Enter your Email..." />
                <label> Password</label>
                <input className="registerInput" type="text" placeholder="Enter your Password..." />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">Login</button>
        </div>
    )
}
