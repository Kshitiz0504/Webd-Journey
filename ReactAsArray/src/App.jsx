// We want to create a linkedin type thing
// where multiple new posts come as soon as we refresh
// Here it must come as we click on the add Posts button

import { PostComponent } from "./Post";
import { useState } from "react";
import './App.css'

function App() {

  const [posts, setPosts] = useState([]);

  // first make an array of objects named posts

  const postComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
  />)

  function addPost() {
    setPosts([...posts, {
      name: "harkirat",
      subtitle: "1000 followers",
      time: "2m ago",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "Want to know how to win big? Check out how these folks won $6000 in bounties."
    }])
  }


  return (
    <div style={{background: "#dfe6e9", height: "100vh", }}>
      <button onClick={addPost}> Add Post </button>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
          {/* // array of objects is created and is rendered over here */}
          {postComponents}
        </div>
      </div>
    </div>
  )
}

export default App
