
import React, { useEffect, useState, useRef } from 'react';

const data = [
    {
        "country": "France",
        "capital": "Paris"
    },
    {
        "country": "España",
        "capital": "Madrid"
    },
    {
        "country": "South Africa",
        "capital": "Joannesburg"
    },
    {
        "country": "Angola",
        "capital": "Luanda"
    },
];

const SearchArrayString = () => {

    const [filter, setFilter] = useState('');

    const [result, setResult] = useState([...data]);

    useEffect(() => {
        setResult (data.filter(it => {
            return Object.keys(it).some(key =>
                it[key].toLowerCase().includes(filter.toLowerCase())
                )
            }
        ))

    }, [filter]);

    return (
        <  >
            <center >

                <h2>Implementing Search Filter Funcionality With Array os Strings</h2>
                <br />
                Search: &nbsp; <input type="text" placeholder="Country or Capital"
                    onChange={e => setFilter(e.target.value)} /><br /><br />

                <table border="1">
                    <tr>
                        <th>Country</th>
                        <th>Capital</th>
                    </tr>
                    {result.map(it =>
                             <tr>
                                <td>{it.country}</td>
                                <td>{it.capital}</td>
                            </tr>
                        )
                    }
                
                </table>

                <hr />
            </center>

        </>
        //
    )
}

export default SearchArrayString;