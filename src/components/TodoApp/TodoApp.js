import React, { useReducer, useRef } from "react";
import { addJob, deleteJob, setJob } from './actions'
import reducer, { initState } from './reducer'

// 3. Reducer


// 4. Dispatch
const TodoApp = () => {

  const [state, dispatch] = useReducer(reducer, initState)
  console.log(state);
  const { job, jobs } = state
  const inputRef = useRef()
  
  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }

  const handleDelete = (index) => {
    console.log('index', index);
    dispatch(deleteJob(index))
  }
  return (
    
    <React.Fragment>
      <h3> Todo</h3>
      <input 
        ref={inputRef}
        value={job} 
        placeholder="Enter todo..." 
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />

      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((item, index) => {
          return  <li key={index}>{item} <span onClick={()=> { handleDelete(index)}}> X </span> </li>
        })}
      </ul>

    </React.Fragment>
  )
}

export default TodoApp