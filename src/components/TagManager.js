import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./TagManager.css";

export const TagManager = () => {
    const [tags, changeTags] = useState([]);
    const [sortedTags, setSortedTags] = useState([]);
    const history = useHistory()


useEffect(() => {
    fetch("http://localhost:8088/tags")
    .then((res) => res.json())
    .then((tagsFromAPI) => {
    changeTags(tagsFromAPI);
    });
}, []);

useEffect(() => {
    setSortedTags(
    tags.sort(function (a, b) {
        if (a.label < b.label) {
        return -1;
        }
        if (a.label > b.label) {
        return 1;
        }
        return 0;
    })
    );
}, [[tags]]);

const saveTag = (event) => {
    event.preventDefault()
    const newTag = {
        label: tag.label

    }

const fetchOption = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newTag)
}

return fetch("http://localhost:8088/tags", fetchOption)
        .then(() => {
            history.push(`/tags}`)
        })
}
return (
    <>
    <div className="TagManagerBox">
    <h1 class="title">Tags</h1>
    {sortedTags?.map((tagObject) => {
        return (
            <div className="tagBox">
            <div className="singleTagBox">
            <h5 class="subtitle is-5">{tagObject.label}</h5>
            </div>
            </div>
        );
    })}
    <div className="createTagForm">
    <fieldset >
        <div>Create Tag</div>
        <input
        required autoFocus
        type="text"
        placeholder="Type Tag Here"
        />
        <button onClick={saveTag}> <h3>Submit Tag</h3> </button>
    </fieldset>
    </div>
    </div>
    </>
    );
};

