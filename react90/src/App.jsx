// starting react revsiion

import {useEffect, useState} from 'react';


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



const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div>
          <button onClick={() => setIsOpen(!isOpen)}>
              {title} {isOpen ? '-' : '+'}
          </button>
          {isOpen && <div>{children}</div>}
      </div>
  );
};

const App = () => {
  return (
      <div>
          <Collapsible title="Section 1">
              <p>This is the content of section 1.</p>
          </Collapsible>
          <Collapsible title="Section 2">
              <p>This is the content of section 2.</p>
          </Collapsible>
      </div>
  );
};

export default App;

