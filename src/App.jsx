import { Component } from 'react';
import './App.css';
import Post from './components/post';

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 30
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div className="container App">

        <button className="plusBtn" onClick={this.increment}>+</button>
        <input type="text" className="counterInput" value={`${this.state.count}*C`} />
        <button className="minusBtn" onClick={this.decrement}>-</button><br /><br /><br /><br /><br /><br /><br /><br />

        <Post />
      </div>

    );
  }
}

export default App;
