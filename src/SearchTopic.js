import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SingleBook from './SingleBook';
import MoveOptions from './Shelves'
import * as BooksAPI from './BooksAPI'

class SearchTopic extends Component {

    state={
        searchBooks:[],
        query:''
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
                    this.setState({searchBooks: books})
                })}, 800)
            } else {
             this.setState({searchBooks:[]})
             }
             this.setState({ query : query})
            }

    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar close-search">
                    <Link to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" 
                        placeholder="Search by title or author or category" 
                        value={this.state.query}
                        onChange={(e)=> this.updateQuery(e.target.value)} />
                    </div>
                </div>
            <div className="search-books-results">
                {this.state.query!=='' &&(
                    <ol className="books-grid">
                    {this.state.searchBooks.map((b)=>(
                        <li key={b.id}>
                            <MoveOptions updateBooks={this.props.updateBooks} book={b}/>
                            <SingleBook updateBooks={this.props.updateBooks} book={b}/>
                        </li>
                    ))}
                    </ol>
                )}
        </div>
    </div>   
        )
    }}

export default SearchTopic