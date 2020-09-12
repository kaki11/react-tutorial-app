import React from 'react';
import Todos from './Todos';
import Games from './Games';
import Icons from './Icon';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/game'>Game</Link></li>
        <li><Link to='/todo'>Todo</Link></li>
      </ul>
      <Icons />
      <Route exact path='/' component={Home} />
      <Route path='/game' component={Game} />
      <Route path='/todo' component={Todo} />
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div className="app">
    <h2>Home</h2>
    <h1>Hello,World!!!!!</h1>
  </div>
)
const Game = () => (
  <div className="app">
    <h2>Game</h2>
    <h1>三目並べ</h1>
    <Games />
  </div>
)
const Todo = () => (
  <div className="app">
    <h2>Todo</h2>
    <h1>TODOメモ</h1>
    <Todos />
  </div>
)

export default App