import React from "react";
import "./home.css"
import logo from "../images/company_logo.png"

function Home(){

    return(
        <div className={"page-body"}>
            <header>
                <a href={""}>
                    <img src={logo} alt={""} className={"logo"}/>
                </a>
                <nav>
                    <ul className={"nav_links"}>
                        <li><a href={"#"}>Home</a> </li>
                        <li><a href={"#"}>About</a> </li>
                        <li><a href={"#"}>Brokage</a> </li>
                        <li><a href={"#"}>Management</a> </li>
                        <li><a href={"#"}>Investment</a> </li>
                        <li><a href={"#"}>Development</a> </li>
                        <li><a href={"#"}>Blog</a> </li>
                        <li><a href={"#"}>Contact</a> </li>

                    </ul>
                </nav>
            </header>
        </div>

    )
}
export default Home;