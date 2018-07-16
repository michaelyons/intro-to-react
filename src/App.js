import React, { Component } from 'react';
import './App.css';
import GroceryListItem from './GroceryListItem';

const items = [
  {name: 'Bananas'},
  {name: 'Pears'},
  {name: 'Kiwis'},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Grocery List</h1>
        {
          items.map((item, i) => <GroceryListItem key={'Glist-' + i} name={item.name} /> )
        }
      </div>
    );
  }
}

export default App;
