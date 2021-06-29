import React, { useState, useRef, useEffect } from 'react';

const Webapi = () => {
    const [empList, setEmpList] = useState([]);

    useEffect(() => {
        fetch('https://localhost:44321/api/employees',
            {
                method: 'GET',
                headers: {  'Content-Type': 'application/json' },
                mode: 'no-cors'
            }
        )
            .then(async res => {
                try {
                    const data = await res.json();
                    console.log('Data: ' + data);
                    return data;
                } catch (e) {
                    console.log('Error happened here!')
                    console.error(e);
                } 
            })
        .then(res => setEmpList(res) )
       // .catch(e => alert(e))        
    }, []);

    const options = (lista) => {
        var result = [];
        if (lista)
            lista.map(emp => result.push(< option title={emp.Id} key={emp.Id} > {emp.Name}</option >))
        else {
            alert('options')
        }
        return result;
    }


    return (
        <>
            <center>
                <h2>Implementing ASP.NET WEBAPI to Fetch Data</h2>
                <hr />
                <select>
                    <option disabled selected>--- Select ---</option>
                    {empList.map(emp => { return <option title={emp.Id} key={emp.Id}>{emp.Name}</option> }) }
                    
                </select>
            </center>
        </>
    )
}

export default Webapi;