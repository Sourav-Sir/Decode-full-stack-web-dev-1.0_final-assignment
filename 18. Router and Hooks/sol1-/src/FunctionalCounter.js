import React, { useState, useEffect } from 'react';

const FunctionalCounter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        console.log('FunctionalCounter component mounted or updated');

        return () => {
            console.log('FunctionalCounter component will unmount');
        };
    }, [count]);

    return (
        <div>
            <h1>Functional Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default FunctionalCounter;
