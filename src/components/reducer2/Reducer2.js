import { useReducer } from "react";

//useReducer
// 1. Init state
// 2. Actions
// 3. Reducer
// 4. Dispatch
function Reducer2(){
    // Init state
    const initState = {
        addJob: '',
        jobs: []
    };

    // Actions
    const SET_JOB = 'set_job';
    const ADD_JOB = 'add_job';
    const DELETE_JOB = 'delete_job';

    // Reducer
    const reducer = (state, action) => {
        switch (action) {
            case SET_JOB:
                return state + 1
            case ADD_JOB:
                return state - 1
            case DELETE_JOB:
                return state - 1
            default:
                throw  new Error('Invalid Action')
        }
    }

    // Dispatch
    const [state, dispatch] = useReducer(reducer, initState);
    const {addJob, jobs} = state;
    console.log(state)
    return (
        <div style={{padding: '20px'}}>
            <h1 className="font-bold mb-3">Todo</h1>
            <input type="text" value={addJob}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Enter todo ..."
                   onChange={e => {
                      // e.target.value
                       dispatch(SET_JOB)
                   }}
            />
            <button className="btn-primary">
                Add
            </button>
            <ul className="mt-6">
                {jobs.map( (job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    )
}
export default Reducer2
