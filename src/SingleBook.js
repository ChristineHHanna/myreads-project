import React, {Component} from 'react'
import StarRatings from 'react-star-ratings';


class SingleBook extends Component {
    render(){
        const{book,updateBooks}=this.props
        const imageLink = this.props.book.imageLinks? this.props.book.imageLinks.thumbnail:"";
    return (
        <div className="book">
        <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("'+imageLink+'")' /* `url(${book.imageLinks.thumbnail})` */ }}/>
            <div className="book-shelf-changer">
                <select value={book.shelf} onChange={(event) => {updateBooks(book, event.target.value)}}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.join(' & ')}</div>
        <div className="book-rating">
            <StarRatings rating={book.averageRating} widgetRatedColors="black" starDimension='15px' starSpacing='5px' />
        </div>
    </div>
    )
}
    }


export default SingleBook