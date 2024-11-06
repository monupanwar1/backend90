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

import PostComponent from '../components/Post';

const App = () => {
  const [posts, setPosts] = useState([]);

  // Map over posts to generate an array of PostComponent instances
  const postComponents = posts.map((post) => (
    <PostComponent
      key={post.id}
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      image={post.image}
      description={post.description}
    />
  ));

  // Function to add a new post with current time
  function addPosts() {
    const currentTime = new Date().toLocaleTimeString(); // Get current time as a string

    setPosts([
      ...posts,
      {
        id: posts.length + 1, // Add a unique id for each post
        name: "kunalPanwar",
        subtitle: "web developer",
        time: currentTime, // Set current time as the time of the post
        image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
        description:
          "Want to know how to win big? Check out how these folks won $6000 in bounties.",
      },
    ]);
  }

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPosts}>Add post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>{postComponents}</div>
      </div>
    </div>
  );
};

export default App;

