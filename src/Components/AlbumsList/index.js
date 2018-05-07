import React, { Component } from 'react'

// import { Route, Link } from 'react-router-dom'

class AlbumsList extends Component {

  state = {
    albums: [],
    loading: false,
  }

  componentDidMount() {
    // this.loadData()
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
        <div>Title: {item.title}</div>
      </div>
    })

    return(
      <div>
        <input type='button' value='Refresh' onClick={this.handleClick}/>
        {albumsList}
      </div>
      )
  }
}

export default AlbumsList
