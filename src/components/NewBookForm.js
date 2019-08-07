import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';


const NewBookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch({ type : "ADD_BOOK", title, author })
        setTitle("");
        setAuthor("");
    }
    return (
        <form onSubmit={handleSubmit} >
            <input
                type="text"
                value={title}
                placeholder={"book title"}
                onChange={({ target: { value } }) => setTitle(value)}
                required
            />
            <input
                type="text"
                value={author}
                placeholder={"author"}
                onChange={({ target: { value } }) => setAuthor(value)}
                required
            />
            <input type={"submit"} />

        </form>
    );
}

export default NewBookForm;