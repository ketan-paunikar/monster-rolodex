import { Component } from "react";
import './search-box.styles.css'


// created the individual SearchBox component so that it will be reusable.
const SearchBox = ({ className, placeholder, onChangeHandler }) => (

    <input
        // classname, plaseholder, onchange should be unique if it needs to be used in multiple times, hence used 'this.props'
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
    />

);



export default SearchBox;