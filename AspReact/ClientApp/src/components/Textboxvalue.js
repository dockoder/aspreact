import React, {useEffect, useState, useRef } from 'react';


const Textboxvalue = () => {

    const inputRef = useRef();

    const [data, setData] = useState('');

    useEffect(() => {

    }, [data]);

    return (
        <>
            <center> 
                <label for="name">Name: </label>
                <input ref={inputRef} value={data} type="text" name="name" onChange={(e) => setData(e.target.value)} />
                <br/>
                <button type="submit" >Click</button>
                <br />
                {data}
            </center>

        </>

        )
}

export default Textboxvalue;