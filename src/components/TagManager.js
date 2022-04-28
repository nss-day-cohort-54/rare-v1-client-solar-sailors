import React, { useEffect, useState } from "react";
import "./TagManager.css"

export const TagManager = () => {
  const [tags, changeTags] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:8088/tags")
      .then((res) => res.json())
      .then((tagsFromAPI) => {
        changeTags(tagsFromAPI); })
  }, []);
  


  const deleteTag = (id) => {
    return fetch(`http://localhost:8090/tags/${id}`, {
        method: "DELETE"
    }).then(getTags)
}

  return (
    <>
        <h1>Tags</h1>
      {tags.map((tagObject) => {
        return (
          <div className="tagBox">
            <div className="singleTagBox">
            <div> <button role="button"> Edit </button> </div> 
            <div> <button role="button" onClick={ () => {deleteTag(tagObject.id)} }> Delete </button> </div> 
            <div><h3>{tagObject.label}</h3></div>
            </div>
            </div>
        );
      })}

    </>
  );
};
