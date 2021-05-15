import React , {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchTopic from './SearchTopic'
import BooksList from './BooksList'


class BooksApp extends Component {
  state = {
    books: [],
    searchBooks:[],
    query:'',
    NotFound: false,
  }
    timeout= null
  

  componentDidMount = () =>{
    this.getAllData()
  }

  getAllData(){
    BooksAPI.getAll()
      .then(res =>{
        this.setState({
          books:res,
        })
        console.log(res)
      })
      console.log(this.state.books);
  }
   
  updateShelf = (book, shelf) =>{
    book.shelf = shelf

    BooksAPI.update(book, shelf)
    .then(books => {
        this.setState(state => ({
            books: state.books.filter(b => b.id !== book.id).concat([ book ])
        }))
    })
  }

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
 
  render() {
    return (

     <div className="app">
           <div className="route">
             <switch>
             <Route exact path='/' render={()=><BooksList books={this.state.books} updateShelf={this.updateShelf}/>}/>
             <Route exact path='/search' render={() => <SearchTopic books={this.state.books} updateShelf={this.updateShelf} searchBooks={this.state.searchBooks} updateQuery={this.updateQuery}/>} />
             </switch>
          </div>
      </div> 
    )
  }
}

export default BooksApp
