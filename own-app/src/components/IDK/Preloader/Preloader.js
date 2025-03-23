import React from "react";
import { NavLink } from "react-router-dom"; // Импорт NavLink
import preloaderGif from "../../../userDetails/photoNotUser/Gif/loader.gif";

const Preloader = () => {
    return (
        <div style={{ backgroundColor: "white" }}>
            <NavLink to="/profile/"> {/* Путь исправлен */}
                <img src={preloaderGif} alt="Loading..." />
            </NavLink>
        </div>
    );
};

export default Preloader;
