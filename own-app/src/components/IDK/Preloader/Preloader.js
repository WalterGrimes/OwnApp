import React from "react";
import preloaderGif from "../../../userDetails/photoNotUser/Gif/loader.gif"; 

const Preloader = () => {
    return (
        <div style={{ backgroundColor: "white" }}>
            <img src={preloaderGif} alt="Loading..." />
        </div>
    );
};

export default Preloader;
