import React, { useState, useEffect } from "react";

const TimerComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component mounted");
        const timer = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
            console.log("Timer running:", count);
        }, 1000);
        return () => {
            clearInterval(timer);
            console.log("Component unmounted, timer cleared");
        };
    }, []);

    return (
        <div>
            <h1>Timer: {count} seconds</h1>
        </div>
    );
};

export default TimerComponent;
