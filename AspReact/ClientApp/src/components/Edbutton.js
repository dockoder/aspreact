import React, { useState, useRef } from 'react';

const Edbutton = () => {
    const [data, setData] = useState('');
    const [accepted, setAccepted] = useState(false);

    const inputRef = useRef();
    return (
        <>
            <center>
                <input ref={inputRef} type="text" placeholder="Enter some text..." value={data}
                    onChange={e => setData(e.target.value)} />
                <button disabled={!data}>Click</button>
                <br /><br />
                <input type="checkbox" onChange={e => setAccepted(e.target.value)}
                    title="dfgdg" />  <em>Accept the Terms & Conditions</em> &nbsp;

                <button disabled={!accepted}>Click</button>
                {data}
            </center>
        </>
    )
}

export default Edbutton;