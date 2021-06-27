import React, { useState } from 'react';

const cars = ["beettle", "corsa", "CLS500", "ascona", "Romi-Isetta", "CLS500", "ascona"];

const ArrayUnique = () => {
    let uniqueData = [...new Set(cars)];

    const [data, setData] = useState(uniqueData);
    return (
        <>
            <center>
                <hr />
                <h3>How to Display Only Unique Values from An Array</h3>
                
                <select>
                    <option selected disable>-- Select --</option>
                    {data.map(item =>
                        <option>{item}</option>
                    )}

                </select>
            </center>
        </>

        
        )
}

export default ArrayUnique;