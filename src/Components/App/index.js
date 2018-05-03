import React, { Component } from 'react'

import './App.css'
import Home from '../Home'
import Genre from '../Genre'
import Admin from '../Admin'
import AlbumsList from '../AlbumsList'

import { Route, Link } from 'react-router-dom'

class App extends Component {


  render () {

    return(
      <div className='App-header'>
        <ul>
          <li><Link to='/admin'>Admin</Link></li>
          <li><Link to='/albums'>AlbumsList</Link></li>
          <li><Link to='/genre'>Genre</Link></li>
        </ul>
        <Route path="/admin" component={Admin}/>
        <Route path="/albums" component={AlbumsList}/>
        <Route path="/genre" component={Genre}/>
      </div>
      )
  }
}


export default App
