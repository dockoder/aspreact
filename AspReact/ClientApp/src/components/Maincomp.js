import React, { useEffect, useState, useRef } from 'react';
import Firstcomp from './Firstcomp';
import Secondcomp from './Secondcomp';
import Thirdcomp from './Thirdcomp';



const Maincomp = () => {

    const comp = [<Firstcomp />, <Secondcomp />, <Thirdcomp />]; 

    return (
        <  >
            <center >
                <hr />
                <h2>Component Random</h2>
                {comp[Math.floor(Math.random() * comp.length)]}
            </center>

        </>
        //
    )
}

export default Maincomp;