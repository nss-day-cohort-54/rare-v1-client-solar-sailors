import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllPosts.css"

export const AllPosts = () => {
const [posts, setPosts] = useState([])
const [postIsReady, setPostIsReady] = useState(false)
const [sortedPosts, setSortedPosts] = useState([])

useEffect(() => {
    fetch("http://localhost:8088/posts")
    .then(r => r.json())
    .then ((d) => setPosts(d))
}, [])

useEffect(() => {
   
    
    setSortedPosts( posts.sort((a, b) => a.publication_date - b.publication_date))
    setPostIsReady(true)
}, [[posts]])




if (!postIsReady) {
    return (
        <div>Still Loading...</div>
    )
}
else {
return (

        <div className = 'grid-container'>
    {sortedPosts?.map((post) => {
        
        return (
                   
<Link className = 'grid-item' key={post.id} to={`/posts/${post.id}`}>
    <div className="post-title">Title: {post.title}</div>
    <div className="post-author">Name: {post.user.first_name} {post.user.last_name}</div>
    <div className="post-category">Category: {post.category.label}</div>
    <div className="post-content">Content: {post.content}</div>
                               </Link>
    )})}
                </div>
    
)
}
}