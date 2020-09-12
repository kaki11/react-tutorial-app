import React from 'react';
import Todos from './Todos';
import Games from './Games';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/game'>Game</Link></li>
        <li><Link to='/todo'>Todo</Link></li>
      </ul>
      <hr />
      <Route exact path='/' component={Home} />
      <Route path='/game' component={Game} />
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
const Game = () => (
  <div>
    <h2>game</h2>
    <Games />
  </div>
)
const Todo = () => (
  <div>
    <h2>Todo</h2>
    <Todos />
  </div>
)

export default App