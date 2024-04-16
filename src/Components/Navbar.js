import React, { useState } from "react";
import "./components.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    let SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=`;
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        console.log("Search query:", searchQuery);
    };

    return (
        <>
            <nav>
                <div className="links">
                    <ul>
                        <li>
                            <Link to="/">
                                <span>The Movie App</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
