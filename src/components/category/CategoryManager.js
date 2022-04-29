import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./CategoryManager.css"

export const CategoryManager = () => {
    const [categories, updateCategories] = useState([]);
    const [category, setCategory] = useState({label:""})
    const history = useHistory()

    const getCategories = () => {
        fetch("http://localhost:8088/categories")
            .then((res) => res.json())
            .then((categories) => {
                updateCategories(categories)
            });
    }

    useEffect(() => {
        getCategories()
    }, []);

    const saveCategory = (evt) => {
        evt.preventDefault()
        const newCategory = {
            label: category.label
        }
    
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCategory)
        }

        return fetch("http://localhost:8088/categories", fetchOption)
            .then(() => {
                getCategories().then(() => history.push('/categories'))
            })
    }

    return (
        <>
            <div className="Rare container">
                <div className="columns">
                    <div className="column">
                        <article className="category-panel">
                            <h1 className="panel-heading">Categories</h1>
                            {
                                categories.map(category => {
                                    return <div className="category">
                                        {category.label}
                                    </div>
                                })
                            }
                        </article>
                    </div>
                    <div className="column">
                        <article className="category-form">
                            <h2 className="panel-heading">Create a new category</h2>
                            <div className="panel-block">
                                <form>
                                    <div className="field">
                                        <div className="control">
                                            <input 
                                                onChange={
                                                    (event) => {
                                                        let categoryCopy = {...category}
                                                        categoryCopy.label = event.target.value
                                                        setCategory(categoryCopy)
                                                    }
                                                }
                                                required autoFocus
                                                type="text"
                                                name="lable"
                                                className="input"
                                                placeholder="Add text"
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <button type="submit" className="create-button" onClick={saveCategory}>
                                                Create
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}