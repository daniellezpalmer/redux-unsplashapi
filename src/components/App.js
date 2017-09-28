import React, { Component } from 'react';
import '../App.css';

class App extends Component {
constructor(props){
  super(props);

this.handleInput = this.handleInput.bind(this);

}

// let handleInput

  render() {
    return (
      <div className="App">
      <form>
        <input type="text" onChange="handleInput" placeholder="Search">

        </input>
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

export default App;
