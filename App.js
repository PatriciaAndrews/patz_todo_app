import React, { Component } from 'react';
import FirstComponent from './components/Samples/FirstComponent'
import SecondComponent from './components/Samples/SecondComponent'
import ThirdComponent from './components/Samples/ThirdComponent'
import Counter from './components/Counter/Counter'
import ToDoApp from './components/todo/ToDoApp'
import logo from './logo.svg';
import './App.css';
import './bootstarp.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
            {/* <Samples/> I have commented this code.*/} 
            {/*<Counter/>*/}
            <ToDoApp/>
      </div>
    );
  }
}
class Samples extends Component {
    render() {
        return (
            <div className="Samples">
                My Hello World
                <FirstComponent />
                <SecondComponent />
                <ThirdComponent />
            </div>
        );
    }
}
export default App;
