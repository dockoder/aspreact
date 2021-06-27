import React, { useState, useEffect } from 'react';

const json = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "y@y.com",
        "mobile": "+1 555 555-5555"
    },
    {
        "id": 2,
        "name": "Jane Plane",
        "email": "x@x.com",
        "mobile": "+2 555 555-5555"
    },
    {
        "id": 3,
        "name": "The Thing",
        "email": "fantastic4@x.com",
        "mobile": "+1 444 4444-4444"
    },
    {
        "id": 4,
        "name": "AquaFlash",
        "email": "superheroemutant@xmen.com",
        "mobile": "+1000 555 555-5555"
    },
];

const Jsondatadisplay = () => {
   // const [data, setData] = useState([]);


    return (
        <>
            <center>
                <h3>Display Json data into an HTML Table</h3>
                <h4>asp.net core react.js redux examples</h4>
                <hr />
                <table border="1">
                    <tr>
                        <th>Emp Id</th>
                        <th>Emp name</th>
                        <th>Email</th>
                        <th>mobile</th>
                    </tr>
                    {json.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                        </tr>
                    )}
                </table>

            </center>
        </>
    )
}


export default Jsondatadisplay;