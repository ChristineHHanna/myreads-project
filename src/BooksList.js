import React from 'react'
import {Link} from 'react-router-dom'
import Shelves from './Shelves'

function BooksList ({books, updateShelf}) {
    return (
        <div className='list-books'>
        <div className='list-books-title'>
            <h1> MyReads </h1>
        </div>
            <div className='list-books-content'>
            <Shelves key='currentlyReading' name="Currently Reading" ShelfOptions={books.filter(book=> book.shelf === "currentlyReading")} updateShelf={updateShelf}/>
            <Shelves key='wantToRead' name="Want to Read" ShelfOptions={books.filter(book=> book.shelf === "wantToRead")} updateShelf={updateShelf}/>
            <Shelves key='read' name="Read" ShelfOptions={books.filter(book=> book.shelf === "read")} updateShelf={updateShelf}/>
            </div>
            <div className='open-search'>
            <Link to='/search'>Add a book</Link>
            </div>
        </div>
    )
}

export default BooksList
