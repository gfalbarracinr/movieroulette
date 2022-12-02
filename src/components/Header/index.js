import { useState } from "react";
import AddMovie from "../AddMovie";
import Button from "../Button";
import Search from "../Search";
import './header.css'

const Header = ({handleSubmit}) => {
    const [showAddMovie, setShowAddMovie] = useState(false);

    const handleClick = () => {
        setShowAddMovie(true);
    }

    const handleClose = () => {
        setShowAddMovie(false);
    }
    return (
        <header className="header-container">
            <Button handleClick={handleClick}/>
            <Search />
            {showAddMovie && <AddMovie handleClose={handleClose} handleSubmit={handleSubmit}/>}
        </header>
    );
}

export default Header;