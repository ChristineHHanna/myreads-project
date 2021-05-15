import React, { Component } from 'react'
import SingleBook from './SingleBook'


class Shelves extends Component {
  render(){ 
      const{name,ShelfOptions,updateShelf} = this.props
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {name}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {ShelfOptions && ShelfOptions.map((b)=>( 
            <li key={b.id}>
              <SingleBook book={b} updateShelf={updateShelf}/>
              </li>
            ))} 
          </ol>
        </div>
      </div>
    )
  }
 } 

export default Shelves