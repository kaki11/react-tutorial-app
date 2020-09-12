// import React from 'react';
// import TodoList from './TodoList';
// import Form from './Form';
// import './App.css';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       list: ['ごはん食べる', 'お買い物'],
//       value: '',
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();

//     this.setState({
//       list: [
//         ...this.state.list,
//         this.state.value,
//       ],
//       value: '',
//     });
//   }

//   render() {
//     return (
//       <div className="app">
//         <h1>TODOアプリ</h1>
//         <Form
//           value={this.state.value}
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit}
//         />
//         <TodoList list={this.state.list} />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/friends'>Todo</Link></li>
      </ul>
      <hr />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/todo' component={Todo} />
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
    <p>こんにちは、</p>
  </div>
)
const Todo = () => (
  <div>
    <h2>Todo</h2>
  </div>
)

export default App