import React, {useState, useEffect} from "react"

export const MyPosts = () => {

    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:8088/posts?user_id=${parseInt(localStorage.getItem("token"))}`)
        .then(r => r.json())
        .then ((d) => setPosts(d))
    }, [])

    return (
        <>
        <div className = 'grid-container'>
    {posts?.map((post) => {
        
        return (
                   
<div className = 'grid-item' key={post.id} >
    <div className="post-title">Title: {post.title}</div>
    <div className="post-author">Name: {post.user.first_name} {post.user.last_name}</div>
    <div className="post-category">Category: {post.category.label}</div>
    <div className="post-content">Content: {post.content}</div>
                               </div>
    )})}
                </div>
        </>
    )
}