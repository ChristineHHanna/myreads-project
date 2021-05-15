import React, {Component} from 'react'
import StarRatings from 'react-star-ratings';


class SingleBook extends Component {

    state= {
        value: this.props.shelf
    }

    updateShelf = (e) => {
        this.setState({value: e.target.value})
        this.props.updateShelf(this.props.book,e.target.value)
    } 

 
    render(){
        const{book}=this.props
        const imageLink = this.props.book.imageLinks? this.props.book.imageLinks.thumbnail:"";
        
    return (
        <div className="book">
        <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("'+imageLink+'")' /* `url(${book.imageLinks.thumbnail})` */ }}/>
            <div className="book-shelf-changer">
                <select value={book.shelf} onChange={this.updateShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors && book.authors.join(' & ') : "No Authors"}</div>
        <div className="book-rating">
            <StarRatings rating={book.averageRating} widgetRatedColors="black" starDimension='15px' starSpacing='5px' />
        </div>
    </div>
    )
}
    }


export default SingleBook