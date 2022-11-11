import { useState } from "react";
import AddMovie from "../AddMovie";
import Button from "../Button";
import Search from "../Search";
import './header.css'

const Header = () => {
    const [showAddMovie, setShowAddMovie] = useState(false);

    const handleClick = () => {
        setShowAddMovie(true);
    }
    return (
        <header className="header-container">
            <Button handleClick={handleClick}/>
            <Search />
            {showAddMovie && <AddMovie/>}
        </header>
    );
}

export default Header;