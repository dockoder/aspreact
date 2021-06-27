import React, { useState, useEffect } from 'react';


const CASDropdown = () => {

    const [ddl1, setDdl1] = useState([]);
    const [ddl2, setDdl2] = useState([]);
    const [selected, setSelected] = useState(''); 

    useEffect(() => {
        setDdl1([
            { name: 'Colors', cat: ['Red', 'Blue', 'Orange', 'Green'] },
            { name: 'Sports', cat: ['Soccer', 'Dart', 'BTT', 'Chess'] },
            { name: 'Fruits', cat: ['Orange', 'Apple', 'Kiwi', 'Cashew'] },
            { name: 'Countrynames', cat: ['Thailand', 'Filipines', 'Uruguay', 'USA'] }
        ]
        )
    }, []);

    useEffect(() => {
        const item = ddl1.find(it => selected === it.name);
        if (item) {
            setDdl2(item.cat);
        } else {
            setDdl2([])
        }

    }, [selected]); 

    return (
        <>
            <center>

                <h3>How to implement Cacading DDL The Default Input TextBox Border Line</h3>
                <select onChange={e => setSelected(e.target.value)}>
                    <option >-- Select --</option>
                    {ddl1.map(it => <option>{it.name}</option>)}
                </select>
                <select>
                    <option>-----</option>
                    { ddl2.map(it => <option>{it}</option> ) }
                </select>

                <hr />
            </center>
        </>
    )
}


export default CASDropdown;