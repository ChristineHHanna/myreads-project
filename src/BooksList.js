import React from 'react'
import {Link} from 'react-router-dom'
import MoveOptions from './Shelves'

function BooksList ({books, updateBooks}) {
    return (
        <div className='list-books'>
        <div className='list-books-title'>
            <h1> MyReads </h1>
        </div>
            <div className='list-books-content'>
            <MoveOptions key='currentlyReading' name="Currently Reading" ShelfOptions={books.filter(book=> book.shelf === "currentlyReading")} updateBooks={updateBooks}/>
            <MoveOptions key='wantToRead' name="Want to Read" ShelfOptions={books.filter(book=> book.shelf === "wantToRead")} updateBooks={updateBooks}/>
            <MoveOptions key='read' name="Read" ShelfOptions={books.filter(book=> book.shelf === "read")} updateBooks={updateBooks}/>
            </div>
            <div className='open-search'>
            <Link to='/search'>Add a book</Link>
            </div>
        </div>
    )
}

export default BooksList
