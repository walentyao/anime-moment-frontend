import React from 'react';
import search from "../../images/magnifying-glass-solid.svg";
import classes from "./SearchTool.module.css";

const SearchTool = () => {
    return (
        <div className={classes.search_tool}>
            <img src={search} alt="search" className={classes.search_img}/>
            <input type="text" className={classes.search_input} placeholder="Марин китагава"/>
        </div>
    );
};

export default SearchTool;