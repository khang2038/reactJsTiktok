import logo from './logo.svg';
import {useReducer, useState} from 'react'
import Content from './Content';
import {setJob,addjob,deletejob} from './actions'
import reducer,{initState} from './reducer'
import logger from '../logger'
//init state

function App() {

  const [state, dispatch]=useReducer(logger(reducer),initState)

  const {job,jobs}=state

  const handleSubmit = () =>{
        dispatch(addjob(job))
        dispatch(setJob(''))
  }

  return (
    <div style={{ padding: 20}}>
        <h3>todo</h3>
        <input

          value={job}
          placeholder='Enter todo....'
          onChange={e=>{
            dispatch(setJob(e.target.value))
          }}
        />
        <button onClick={handleSubmit}>
          Add
        </button>
        <ul>
          {jobs.map((job,index)=>(
            <li key={index}>{job}
               <span onClick={()=>dispatch(deletejob(index))}>
                    &times;
               </span> 
             </li>
          ))}
        </ul>
    </div>
  );
}

export default App;
