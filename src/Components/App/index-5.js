import React, { Component, Fragment } from 'react'

import './App.css'

class App extends Component {

  state = {
    loading: false,
    albums: []
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = () => {

    this.setState ({loading: true})

    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(albums => this.setState({albums, loading: false}))
    }

    handleClick = () => {
    this.loadData()
  }

  render() {

    const { loading, albums } = this.state


      if (loading) {
        return <div>
          Загрузка
        </div>
      }
    

    const albumList = albums.map(el => {
      return <div key={el.id}>
      <div>Title: {el.title}</div>
      </div>
    })

    return(
      <Fragment>
        <input type='button' value='Refresh' onClick={this.handleClick}/>
        {albumList}
      </Fragment>
    )
  }
}










export default App