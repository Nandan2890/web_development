import React, { useEffect, useState } from "react";

const WindowResizer = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        //cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }); //empty array: effect runs once and sets up the listener

    return <h1>Window width:{windowWidth}px</h1>
};

export default WindowResizer;