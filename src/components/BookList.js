import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';


const BookList = () => {
    const { books } = useContext(BookContext);
    return books.length ?
        <ul className="book-list" >
            {
                books.map(book => <BookDetails book={book} key={book.id} />)
            }
        </ul>
        :
        <div className="empty">No Books to read ;)</div>
}

export default BookList;