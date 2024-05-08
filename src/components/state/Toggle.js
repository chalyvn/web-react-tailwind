import {useState} from "react";
import "./ToggleStyle.css"
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

function Toggle(){
    // 1. enabling state: useState(initialize value)
    // 2. initialize state: useState(false)
    // 3. reading state
    // 4. update state
    const [on, setOn] = useState(false);
    const handleToggle = () => {
        //setOn(callback) -> setOn(prevState => !prevState ( nguoc voi gia tri truoc do)
        setOn(on => !on); //return !on
    }
    return (
        <div>
            <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
                <div className={`spinner ${on ? "active" : ""}`}></div>
            </div>
            {on ? "ON" : " OFF"}
        </div>

    );
}

export default Toggle;
