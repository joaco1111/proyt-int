import React from "react";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({onSearch}) => {
    
    return (
        <NavBar class="navbar navbar-dark bg-dark">
        <SearchBar onSearch={onSearch}/>
      </NavBar>  
    )
}

    
export default NavBar;
