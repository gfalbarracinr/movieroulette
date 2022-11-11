import React from "react";
import "./button.css"

export default function Button() {
    return React.createElement('button', { className: 'button-container'}, '+ Add movie');
}