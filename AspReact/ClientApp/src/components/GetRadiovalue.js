import React, {useState } from 'react';


const GetRadiovalue = () => {

    const [data, setData] = useState('red');

    return (
        <>
            <div onChange={e => setData(e.target.value)} >
                <center>
                    <input type="radio" value="red" name="Rb" checked={ data=="red" } /> Red &nbsp;&nbsp;
                    <input type="radio" value="green" name="Rb" /> Green &nbsp;&nbsp;
                    <input type="radio" value="blue" name="Rb" /> Blue &nbsp;&nbsp;
                    <br/>
                    Selected radio value is: <strong style={{ color: data }}>{data}</strong>
                 </center>
                
            </div>
        </> 
        )

}

export default GetRadiovalue;