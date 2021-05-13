import React , {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchTopic from './SearchTopic'
import BooksList from './BooksList'


class BooksApp extends Component {
  state = {
    books: [],
    searchBooks:[]

  }

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
   

   updateBooks = (book,shelf) => {
    BooksAPI.update(book, shelf); 
    if(this.state.books.filter((b)=> b.id === book.id)) {
      this.setState({books: this.state.books.map((sh)=> {
        if (book.id === sh.id)
          sh.shelf = shelf
          return sh 
      })
    })
    } else {
      book.shelf = shelf;
      this.setState({books: this.setState.books.concate([book])
    })
  }
  }

  render() {
    return (

     <div className="app">
           <div className="route">
             <Route exact path='/' render={()=><BooksList books={this.state.books} updateBooks={this.updateBooks}/>}/>
             <Route exact path='/search' render={() => <SearchTopic books={this.state.books} updateBooks={this.updateBooks} searchBooks={this.state.searchBooks}/>} />
          </div>
      </div> 
    )
  }
}

export default BooksApp
