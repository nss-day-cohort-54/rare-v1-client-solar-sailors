import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Post = () => {
    const [post, setPost] = useState()
    const { postId } = useParams()
    const [postIsReady, setPostIsReady] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:8088/posts/${postId}`)
            .then(r => r.json())
            .then((data) => {
                setPost(data)
            })
            .then(() => setPostIsReady(true))
    },
        [postId])


    if (!postIsReady) {
        return (
            <div>Still Loading...</div>
        )
    }
    else {
        return (

            <div className='post-container'>
                <div className="post-title">Title: {post.title}</div>
                <div className="post-author">Name: {post.user.first_name} {post.user.last_name}</div>
                <div className="post-category">Category: {post.category.label}</div>
                <div className="post-date">Date: {post.publication_date}</div>
                <div className="post-content">Content: {post.content}</div>
            </div>
        )
    }
}