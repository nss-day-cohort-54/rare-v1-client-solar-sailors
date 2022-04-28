import React from "react"
import { Route } from "react-router-dom"
import { AllPosts } from "./AllPosts"
import { CategoryManager } from "./CategoryManager"
import { MyPosts } from "./MyPosts"
import { Post } from "./Post"
import { TagManager } from "./TagManager"

export const ApplicationViews = () => {
  return (
    <>
            {/* <Route exact path="/">
                
                <AllPosts/>
                
            </Route> */}

            <Route exact path="/Allposts">
                
                <AllPosts/>
                
            </Route>

            <Route exact path="/posts/:postId(\d+)">

            <Post />

            </Route>

            <Route exact path="/myposts">
                
                <MyPosts/>
                
            </Route>

            <Route exact path="/categorymanager">
                
                <CategoryManager/>
                
            </Route>

            <Route exact path="/tagmanager">
                
                <TagManager/>
                
            </Route>

            
        </>
  )
}
