import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SingleBook from './SingleBook';
import * as BooksAPI from './BooksAPI'

class SearchTopic extends Component {

    state={
        searchBooks:[],
        query:'',
        NotFound: false,
    }
    timeout= null

     updateQuery = (query) => {
         if(this.timeout){
             clearTimeout(this.timeout);
             this.timeout=null
         }
          if (query) {
             this.timeout = setTimeout(() =>{
                BooksAPI.search(query)
                .then(books =>{
                    this.setState({searchBooks: books});
                    this.setState({NotFound:false}) 
                })}, 800)
            } else {
             this.setState({searchBooks:[]});
             this.setState({NotFound:true})
             }
             this.setState({ query : query});
            }

    render(){

        {this.state.searchBooks.length > 0 &&
            this.state.searchBooks.map(book => {
                const currentShelf = this.props.books.find(
                    searchBooks => searchBooks.id === book.id
                )
                        if(currentShelf) {
                            book.shelf = currentShelf.shelf
                        } else {
                            book.shelf = 'none'
                        }
                    })}

        
        const updatedBooks = this.props.searchBooks.map(book => {
            this.props.books.map(b => {
                if(b.id === this.props.books.id) {
                    this.props.books.shelf = b.shelf;
                }
                
            })
            return book
        })


        return(
            <div className="search-books">
                <div className="search-books-bar close-search">
                    <Link to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" 
                        placeholder="Search by title or author or category" 
                        value={this.state.query}
                        onChange={(event)=> this.updateQuery(event.target.value)} />
                    </div>
                </div>
            <div className="search-books-results">
                {this.state.NotFound === true  || this.state.searchBooks.error && (
                <ol className="books-grid">
                    Sorry, No Books matching your search subject. Please choose another search subject.
                </ol>
                )}
            {!this.state.searchBooks.error && this.state.NotFound ===false && (
                <ol className="books-grid">
                    {this.state.searchBooks.map((b)=>(
                        <li key={b.id}>
                            <SingleBook updateShelf={this.props.updateShelf} book={b} searchBooks={this.state.searchBooks}/>
                        </li>
                    ))}
                </ol>
            )}
                </div>
            </div>   
        )
    }}

export default SearchTopic