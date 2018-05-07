import React, { Component } from 'react'

import './App.css'

import Admin from '../Admin'
import AlbumsList from '../AlbumsList'
import Dnb from '../Genre/Dnb'
import Genre from '../Genre'
import Home from '../Home'
import RAP from '../Genre/RAP'
import Rock from '../Genre/Rock'



import { Route, Link } from 'react-router-dom'

class App extends Component {


  render () {

    return(
      <div className='App-header'>
        <ul>
          <li><Link to='/admin'>Admin</Link></li>
          <li><Link to='/albums'>AlbumsList</Link></li>
          <li><Link to='/genre'>Genre</Link></li>
            <ul>
              <li><Link to='/genre/d-n-b'>D'n'B</Link></li>
              <li><Link to='/genre/rap'>RAP</Link></li>
              <li><Link to='/genre/rock'>ROCK</Link></li>
            </ul>
        </ul>
        <Route path="/admin" component={Admin}/>
        <Route path="/albums" component={AlbumsList}/>
        <Route path="/genre" component={Genre}/>
        <Route path="/genre/d-n-b" component={Dnb}/>
        <Route path="/genre/rap" component={RAP}/>
        <Route path="/genre/rock" component={Rock}/>
      </div>
      )
  }
}


export default App
