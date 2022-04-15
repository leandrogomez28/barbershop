
import React from 'react';
import "./Navbar.css";



function Navbar() {
    return (
        <>


            <nav className='nav-barber fixed'>
                <ul>
                    <li>
                        <div className="home-icon bg-dark opacity-75">
                            <div className="roof">
                                <div className="roof-edge"></div>
                            </div>
                            <div className="front"></div>
                        </div>
                    </li>
                    <li>
                        <div className="about-icon">
                            <div className="head">
                                <div className="eyes"></div>
                                <div className="beard"></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="work-icon">
                            <div className="paper"></div>
                            <div className="lines"></div>
                            <div className="lines"></div>
                            <div className="lines"></div>
                        </div>
                    </li>
                    <li>
                        <div className="mail-icon">
                            <div className="mail-base">
                                <div className="mail-top"></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>





        </>
    )
};

export default Navbar;