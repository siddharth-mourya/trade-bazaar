import React from "react";
import "./searchBar.css";

export default function SearchBar()
{
    return(
        <form className="search-bar w-100">
            <div class="input-group">
                <span> <i class="fa position-absolute fa-search"></i></span>
                <input type="text" class="form-control" placeholder="Search here..." aria-label="Search here..." aria-describedby="basic-addon2" />
            </div>
        </form>
    )
}