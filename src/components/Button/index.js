import React from "react";
import PropTypes from 'prop-types';
import "./button.css"

const Button = ({handleClick}) => {
    return (
        <button className="button-container" onClick={handleClick} > + Add movie </button>
    )
}
Button.propTypes = {
    handleClick: PropTypes.func.isRequired
}
export default Button;

