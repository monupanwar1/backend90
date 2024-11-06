// starting react revsiion

import {useState} from 'react';


const App = () => {

    const [count, setCount]=useState(0);
  return (
    <>
    <div>count :{count}</div>
    <button onClick ={()=>setCount(count+1)}> Increment</button>
    <button onClick ={()=>setCount(count-1)}> decrement</button>
    </>
)
}
export default App
