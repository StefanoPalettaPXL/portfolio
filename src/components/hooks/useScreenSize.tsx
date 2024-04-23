"use client";

import { useState, useEffect } from "react";

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState(0);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        handleResize(); // Set the initial screen size
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return screenSize;
};

export default useScreenSize;