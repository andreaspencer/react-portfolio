import React, { useState } from "react";
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import Portfolio from './Portfolio';
import Resume from './Resume';

function Header() {
    const [currentPage, handlePageChange] = useState("About");

    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />
            default:
                return <About />;
        }
    };
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://github.com/andreaspencer/" target="_blank" rel="noopener noreferrer">
                        <span className="navmain">Andrea Spencer</span>
                    </a>
                </div>
            </nav>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    );
}

export default Header;