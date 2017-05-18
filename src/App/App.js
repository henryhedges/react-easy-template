import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            someVar: 3
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
      let { someVar } = this.state;

      this.setState({ someVar: someVar + 1 })
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome Your Tesing Environment!</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App/App.js</code> and save to reload.
                </p>
                <p>Counter: {this.state.someVar}</p>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default App;
