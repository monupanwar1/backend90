// starting react revsiion

import { useRef, useState} from 'react';


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




// const App =()=>{

//     let [notification,setNotification] = useState(0);

//     const handleClick =()=>{
//         console.log("hihihihih")
//         setNotification(notification+1);
//     }

//     return(
//         <div style={{background:"#dfe6ef",height:"100vh"}}>
//             <button onClick={handleClick}>Increment</button>
//             <p>{notification}</p>



//         </div>

//     )
// }
// export default App;

// import PostComponent from '../components/Post';

// const App = () => {
//   const [posts, setPosts] = useState([]);

//   // Map over posts to generate an array of PostComponent instances
//   const postComponents = posts.map((post) => (
//     <PostComponent
//       key={post.id}
//       name={post.name}
//       subtitle={post.subtitle}
//       time={post.time}
//       image={post.image}
//       description={post.description}
//     />
//   ));

//   // Function to add a new post with current time
//   function addPosts() {
//     const currentTime = new Date().toLocaleTimeString(); // Get current time as a string

//     setPosts([
//       ...posts,
//       {
//         id: posts.length + 1, // Add a unique id for each post
//         name: "kunalPanwar",
//         subtitle: "web developer",
//         time: currentTime, // Set current time as the time of the post
//         image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
//         description:
//           "Want to know how to win big? Check out how these folks won $6000 in bounties.",
//       },
//     ]);
//   }

//   return (
//     <div style={{ background: "#dfe6e9", height: "100vh" }}>
//       <button onClick={addPosts}>Add post</button>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <div>{postComponents}</div>
//       </div>
//     </div>
//   );
// };

// export default App;

// creating timer


// const App =()=>{

//   const stylig ={
//     backgroundColor:"blue",
//     height:80,
//     width:80,
//     display:"flex",
//     justifyContent:"center",
//     alignItems:"center",
//     color:"white",
//     fontSize:20,
//     borderRadius:10,
//     padding:20
//   }

//   const [time,setTime]=useState(0);

//   useEffect(()=>{

//     const timer =setInterval(()=>{
//       setTime(time+1);

//     },1000);

//     return ()=>clearInterval(timer)

//   },[time])

//   return(
    

//     <div style={stylig}>
//       {time} seconds 😊

//     </div>
//   )




// }
// export default App;




// const App =()=>{
//   const style = {
//     backgroundColor: "blue",
//     justifyContent: "center",
//     alignItems: "center",
//     color: "white",
//     fontSize: 20,
//     padding: 20
// };

//   const [users,setUsers]=useState([]);
//   const [loading,setLoading]=useState(true);


//   useEffect(()=>{
//     const fetchData = async()=>{

//       try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//        const data = await response.json();
//        setUsers(data);
       

//       }catch(error){
//         console.log("error in fetchin the data",error);

//       } finally{
//         setLoading(false);
//       }
      
//     };
//     fetchData();
//   },[]);



//   if (loading){
//     return(
//       <div>Loading...</div>
//     )
//   }


//   return(
//     <ul>
//       <li style={style}>{users.map(user=>(
//       <div style={{ borderTop: "2px solid red",}} key={user.id}>
//         <p>{user.name}</p>
//         <p>{user.email}</p>
//       </div>
//       ))}</li>
     
//     </ul>
//   )
// }

// export default App;



// conditional rendering

// const App =()=>{

//   const [isVisible,setIsVisible] =useState(false);

//   return (
//     <div>
//       <button onClick={()=>setIsVisible(!isVisible)}>
//         Toggle Visibility
//       </button>
//       {isVisible &&  <p>this message is conditonal render</p>}


//     </div>
//   )

// }
// export default App;



// const Collapsible = ({ title, children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//       <div>
//           <button onClick={() => setIsOpen(!isOpen)}>
//               {title} {isOpen ? '-' : '+'}
//           </button>
//           {isOpen && <div>{children}</div>}
//       </div>
//   );
// };

// const App = () => {
//   return (
//       <div>
//           <Collapsible title="Section 1">
//               <p>This is the content of section 1.</p>
//           </Collapsible>
//           <Collapsible title="Section 2">
//               <p>This is the content of section 2.</p>
//           </Collapsible>
//       </div>
//   );
// };

// export default App;


//map ,lists and key ;

// const Itemlist=({items})=>{
//   return (
//     <ul>
//       {items.map(item=>(
//         <li key={item.id}>
//           {item.name}
//         </li>
//       ))}
//     </ul>
//   )
// }


// const App =()=>{

//   const items=[
//     {id:1,name:"item 1"},
//     {id:2,name:"item 2"},
//     {id:3,name:"item 3"},
//     {id:4,name:"item 4"},
//     {id:5,name:"item 5"},
//   ]

//   return (
//     <div>
//       <Itemlist items={items}/>
//     </div>
//   )
// }

// export default App;



// spa routing



// import{BrowserRouter,Routes,Route,Link} from "react-router-dom";

// const App =()=>{
//   return(
//     <div>
//       <BrowserRouter>
//       <Link to="/"> kunalsCode</Link>
//       <Link to="/neet/class11th">Class 11</Link>
//       <Link to="/neet/class12th">class 12</Link>
//       <Routes>
//        <Route path='/' element={<Landing/>}/>
//        <Route path='/neet/class11th' element={<Class11th/>}/>
//        <Route path='neet/class12th' element={<Class12th/>}/>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// function Landing(){
//   return(
//     <div>
//       <h1>Landing Page</h1>
//     </div>
//   )
// }

// function Class11th(){
//   return(
//     <div>
//       <h1>Class 11th Page</h1>
//     </div>
//   )
// }

// function Class12th(){
//   return(
//     <div>
//       <h1>Class 12th Page</h1>
//     </div>
//   )
// }







// export default App;




// const App =()=>{

//   const inputRef =useRef(null);

//   const handleClick=()=>{
//    inputRef.current.focus();
//   }

//   return (
//     <div>
//       <input type="text" ref={inputRef} placeholder='click on the buttonf for focus me' />

//       <button style={{backgroundColor:"blue",height:40 ,width:100}} onClick={handleClick}> foucs</button>
//     </div>
//   )
// }

// export default App;


// stopwatch 
const App=()=>{
  const [time,SetTime]=useState(0);
  const intervalRef =useRef(null);

  const starTimer=()=>{
    if(intervalRef.current!==null) return;
    intervalRef.current=setInterval(()=>{
      SetTime((prevTime)=>prevTime+1)

    },1000)

  }

  const stopTimer =()=>{
    clearInterval(intervalRef.current);
    intervalRef.current=null;
  }

  const resetTimer =()=>{
    SetTime(0)
  }

  return(
    <div>
      <h1>Timer:{time}</h1>
      <button onClick={starTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )

}

export default App;





