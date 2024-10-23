import React from "react";
import Search from "./search";


function Navbar({ setSearchTarget, setSearchMode }) {
    return (
        <div className="navbar">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
            alt="img"
            className="logo"></img>
            <h1 className="home" onClick={() => setSearchMode(false)}>Home</h1>
            <Search setSearchTarget={setSearchTarget} setSearchMode={setSearchMode}/>
        </div>
    )
}


export default Navbar;