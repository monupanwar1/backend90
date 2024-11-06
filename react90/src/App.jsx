// starting react revsiion

import {useState} from 'react';


// const App = () => {

//     const [count, setCount]=useState(0);
//   return (
//     <>
//     <div>count :{count}</div>
//     <button onClick ={()=>setCount(count+1)}> Increment</button>
//     <button onClick ={()=>setCount(count-1)}> decrement</button>
//     </>
// )
// }
// export default App




const App =()=>{

    let [notification,setNotification] = useState(0);

    const handleClick =()=>{
        console.log("hihihihih")
        setNotification(notification+1);
    }

    return(
        <div style={{background:"#dfe6ef",height:"100vh"}}>
            <button onClick={handleClick}>Increment</button>
            <p>{notification}</p>



        </div>

    )
}
export default App;
