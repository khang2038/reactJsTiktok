import logo from './logo.svg';
import {useState} from 'react'
import Content from './Content';

function App() {

  const [show,setshow]=useState(false)
  return (
    <div style={{ padding: 20}}>
        <button onClick={()=>setshow(!show)}>Toggle</button>
        {show && <Content/>}
    </div>
  );
}

export default App;
