
import React, { useEffect, useState, useRef } from 'react';

const Randomstring = () => {

    const sport = ["Soccer", "Cricket", "Tennis", "Rugby", "Chess"];

    const [text, setText] = useState('Cricket');

    

    useEffect(() => {
        const interval = setInterval(() => {
            setText(sport[Math.floor(Math.random() * sport.length)]);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <  >
            <center >
                
                <h2>How to Display Random String on Every Few Seconds</h2>
                <br />
                <strong>{text}</strong>
                <hr />
            </center>

        </>
        //
    )
}

export default Randomstring;