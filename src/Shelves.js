import React, { Component } from 'react'
import SingleBook from './SingleBook'


class MoveOptions extends Component {
  render(){ 
      const{name,ShelfOptions} = this.props
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {name}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {ShelfOptions && ShelfOptions.map((b)=>( 
            <li key={b.id}>
              <SingleBook book={b} updateBooks={this.props.updateBooks}/>
              </li>
            ))} 
          </ol>
        </div>
      </div>
    )
  }
 } 

export default MoveOptions