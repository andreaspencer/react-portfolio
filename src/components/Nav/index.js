import React from "react";

function Nav(props) {
    const tabs = ["About", "Portfolio", "Contact", "Resume"];
    return (
        <div className="">
            <ul className="flex-row">
                {tabs.map((tab) => (
                    <li className={props.currentPage === tab ? "navActive": "nav-link"}
                    key={tab}
                    >
                    <a href={"#" + tab.toLowerCase()}
                    onClick={() => props.handlePageChange(tab)}
                    className={ props.currentPage === tab ? "navActive": "nav-link"}
                    >
                    {tab}
                    </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Nav;