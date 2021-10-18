import React from "react";
import {
    Link
} from "react-router-dom";

function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;