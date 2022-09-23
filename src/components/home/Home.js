import React from "react";
import "./home.css"
import logo from "../images/company_logo.png"
import vector from "../images/Vector.png"

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

            <div className={"first-section"}>
                <div className={"text-overlay"}>
                    <h1>Discover Amazing <br/>
                        Properties in Nigeria
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,</p>
                    <p>mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum </p>
                    <p>tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent</p>
                    <p>tacitinubia nostra, per inceptos himenaeos.</p>
                    <div className={"button-tag"}>
                        <p>Explore Properties</p>
                    </div>
                </div>
            </div>

            <div className={"second-section"}>
                <img src={vector} alt={""} className={"vector-arrow"}/>
                <div className={"mission-statement"}>
                    <h1>Our <br/>Mission</h1>
                    <p> <b>DGR</b> real estate aims to be the leading property company in Nigeria providing real<br/>
                        solutions in the real estate sector. our business affiliations and partnership with <br/>
                        numerous business entity was an idea to put together all what it needs to serve our <br/>
                        esteemed clients with the best services that well address their issues and meet <br/>
                        their needs and promote the integrity of the company.</p>
                    <div className={"tag"}>
                        <p>Learn More</p>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Home;