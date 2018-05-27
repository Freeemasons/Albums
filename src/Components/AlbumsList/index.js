import React, { Component } from 'react'

import PT from 'prop-types'

class AlbumsList extends Component {

  state = {
    albums: [],
    loading: false,
  }

  loadData = () => {
    this.setState({loading: true})
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(albums => this.setState({albums, loading:false}))
  }

  handleClick = () => {
    this.loadData()
  }

  render () {
    console.log(this.props)
    const { albums, loading } = this.state

    if (loading) {
      return (
        <div>Loading</div>
      )
    }

    const albumsList = albums.map(item=> {
      return <div key={item.id}>
        <div className='App-album'>Title: {item.title}</div>
      </div>
    })

    return(
      <div className='App-header'>
        <input
          type='button'
          value='Refresh'
          onClick={this.handleClick}
          className='Button Button--orange'
          />
        {albumsList}
      </div>
      )
  }
}

AlbumsList.propTypes = {
  handleClick: PT.func.isRequired
}

export default AlbumsList
