// import React from 'react';
//
// // stateless functional component - component ko sd state
// function Toggle(){
//     return <div className="toggle"></div>;
// }
//
// // statefull functional component - component co sd state
// function Toggle2(){
//     // const [count, setCount] = useState();
//     return <div className="toggle"></div>;
// }

import {useState} from "react";

function Toggle(){
    // 1. enabling state: useState(initialize value)
    // 2. initialize state: useState(false)
    // 3. reading state
    // 4. update state
    const array = useState(false);
    console.log(array);
    return <div className="toggle"></div>;
}

export default Toggle;
