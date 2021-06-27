import React, { useState, useEffect } from 'react';
import './NavMenu.css';



const Removeborder = () => {

    return (
        <>
            <center>
                
                <h3>How to Remove The Default Input TextBox Border Line</h3>
                <h4>React.js using CSS</h4>

                Name: &nbsp;<input className="txtbgcolor"  type="text" placeholder="Enter Name..." />&nbsp;
                Age: &nbsp;<input className="txtbgcolor" type="text" placeholder="Enter Age..." />
                <hr />
            </center>
        </>
    )
}


export default Removeborder;