import React, { useEffect } from 'react';

function FunctionalCounter ({ number }) {

    useEffect(() => {
        console.log("Updating in functional counter")
    }, [number]);
    
        return (
            <div>
               <h1>Decrement Counting: {number}</h1> 
            </div>
        );
    }

export default FunctionalCounter;
