import { useReducer } from "react";

//useState
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)

//useReducer
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

//useState
// function Reducer(){
//     const [count, setCount] = useState(0);
//
//     return (
//         <div style={{padding: '20px'}}>
//             <h1 className="font-bold">{count}</h1>
//             <button className="btn-primary"
//                 onClick={() => setCount(count - 1)}>
//                 Down
//             </button>
//             <button className="btn-secondary"
//                 onClick={() => setCount(count + 1)}>
//                 Up
//             </button>
//         </div>
//     )
// }

//useReducer
function Reducer(){
    // Init state
    const initState = 0;

    // Actions
    const UP_ACTION = 'up';
    const DOWN_ACTION = 'down';

    // Reducer
    const reducer = (state, action) => {
        switch (action) {
            case UP_ACTION:
                return state + 1
            case DOWN_ACTION:
                return state - 1
            default:
                throw  new Error('Invalid Action')
        }
    }

    // Dispatch
    const [count, dispatch] = useReducer(reducer, initState);

    return (
        <div style={{padding: '20px'}}>
            <h1 className="font-bold">{count}</h1>
            <button className="btn-primary"
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Down
            </button>
            <button className="btn-secondary"
                onClick={() => dispatch(UP_ACTION)}
            >
                Up
            </button>
        </div>
    )
}
export default Reducer
