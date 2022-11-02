import React from "react";
import {Link} from "react-router-dom"


export default function HomeButton() {
    return(
        <div>
            <Link to="/">
                <img src="https://i.ibb.co/6sdL2hQ/magia-manchestera.png" alt="home button" className="HomeButton" />
            </Link>
        </div>
    )
}