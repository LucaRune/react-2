import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="Navbar">
             {/*<div className="dropdown">*/}
             {/*    <span className="dropbox">Color</span>*/}
             {/*    <div className="dropdown-content">*/}
             {/*        <a href="#">Red</a>*/}
             {/*        <a href="#">Yellow</a>*/}
             {/*        <a href="#">Green</a>*/}
             {/*    </div>*/}
             {/*</div>*/}


            <ul>
                <li><Link to="/" id="active">ICON</Link></li>
                <li><Link to="/" id="hover-line">Home</Link></li>
                <div className="dropdown">
                    <span className="dropbox">
                <li><Link to="/detail">Detail</Link></li></span>
                    <div className="dropdown-content">
                        <Link to="/detail/0">ONE</Link>
                        <Link to="/detail/1">TWO</Link>
                        <Link to="/detail/2">THREE</Link>
                    </div>
                </div>
            </ul>
            <div><Link to="/join" id="join-tab">Join</Link></div>
            <div><Link to="/">Login</Link></div>
        </div>
    );
};

export default Navbar;