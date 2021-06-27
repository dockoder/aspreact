import React, { useEffect, useState, useRef } from 'react';


const Allownumbers = () => {

    const inputRef = useRef();

    const [data, setData] = useState('');

    useEffect(() => {

    }, [data]);

    return (
        <>
            <center>
                <hr />
                <h3>Only numbers</h3>
                <input type="text" placeholder="Enter only numbers..." value={data} ref={inputRef}
                    onChange={e => setData(e.target.value.replace(/\D/g, ''))} />
            </center>

        </>

    )
}

export default Allownumbers;