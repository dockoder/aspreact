import React, { useState, useEffect } from 'react';
import './NavMenu.css';


const BackgroundComponent = () => {

    const [ddl1, setDdl1] = useState([]);

    useEffect(() => {
        setDdl1([
            { name: 'Colors', cat: ['Red', 'Blue', 'Orange', 'Green'] },
            { name: 'Sports', cat: ['Soccer', 'Dart', 'BTT', 'Chess'] },
            { name: 'Fruits', cat: ['Orange', 'Apple', 'Kiwi', 'Cashew'] },
            { name: 'Countrynames', cat: ['Thailand', 'Filipines', 'Uruguay', 'USA'] }
        ]
        )
    }, []);


    return (
        <div className='bgimg'>
            <center>

                <h3>How to Add Background Image Or Color To a ReactJS Component Single Component & Globaly</h3>
                <p>adadss asddsa dasddasd asddasdas</p>
                <p>adadss asddsa dasddasd asddasdas</p>
                <p>adadss asddsa dasddasd asddasdas</p>
                <p>adadss asddsa dasddasd asddasdas</p>
                <p>adadss asddsa dasddasd asddasdas</p>
                <p>adadss asddsa dasddasd asddasdas</p>
                <p>adadss asddsa dasddasd asddasdas</p>
                <p>adadss asddsa dasddasd asddasdas</p>


                <hr />
            </center>
        </div>
    )
}


export default BackgroundComponent;