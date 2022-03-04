import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import "./Posts.css";


const Posts = ({setCurrentId }) => {
  

    const posts = useSelector(state => state.posts);
    console.log('This is a Post\'s Component')

console.log(posts);


    return (
          <div className="ui four column grid posts-main">
                  {
                        posts.map(post=>{
                            
                              return <div className = "column four wide" key={post._id}> <Post post = {post} setCurrentId = {setCurrentId} /> </div>    
                              
                        })    
                    }           
          </div>
         )
}

export default Posts;