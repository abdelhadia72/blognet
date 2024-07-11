import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex containerx gap-3 pt-4 justify-between ">
            <div className="logo">Logo</div>
            <ul className="flex gap-4 justify-center">
                <li>Home</li>
                <li>Bogs</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="flex gap-4 justify-center">
                <div className="login">
                    Login
                </div>
                <div className="signup">
                    Sign up
                </div>

            </div>
        </nav>
    )
}
export default Navbar
