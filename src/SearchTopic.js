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
 /*        BooksAPI.search(query)
        .then(searchBooks =>{
            if(!searchBooks || searchBooks.error) {
                this.setState({searchBooks:[],query:query})
            } else {
                this.setState({query:query, searchBooks: searchBooks.map((book) => {
                    const currBook = this.props.books.find((t) => t.id ===book.id);
                    book.shelf = currBook ? currBook.shelf: "none"
                    return book;
                })})
            }
        })
    } */

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
    }
  /*   static propTypes = {
        contacts : PropTypes.array.isRequired,
        onDeleteContact : PropTypes.func.isRequired
      }
      
    state = {
        query: '',
        ResultBooks:[]
    }

    UpdateQuery = (query) => {
        BooksAPI.search(query)
        .then(ResultBooks =>{
            if (!ResultBooks || ResultBooks.error){
                this.setState({ResultBooks:[], query:query.trim()})
            } else {
                this.setState({query:query.trim(), ResultBooks:ResultBooks.map((b) => {
                  const prevState = this.props.books.find((sh)=>sh.id === b.id)
                  b.shelf = prevState? prevState.shelf : 'none'
                  return b
                })})
            }
        })
      }

      clearQuery = () => {
          this.UpdateQuery('')
      }

    render(){
        const {query, ResultBooks} = this.state
        return(
            <div className="search-books">
                <div className="search-books-bar close-search">
                    <Link to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                    <input type="text" 
                    placeholder="Search by title or author or category" 
                    value={query}
                    onChange={(event)=>this.UpdateQuery(event.target.value)}/>
                    </div>
                    
                    {ResultBooks && ResultBooks.length>0 && (

                <div className="search-books-results">
                <ol className="books-grid">
                    {ResultBooks.map((book)=>(
                        <li key={book.id}>
                            <SingleBook key={book.id} onShelfChange={this.onShelfChange} UpdateQuery={this.UpdateQuery}/>
                        </li>
                    ))}
                </ol>
                </div>
                    )}
            </div>
        </div> 
        )
    }*/
}

export default SearchTopic