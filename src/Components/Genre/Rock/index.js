import React, { Component } from 'react'

export default class Rock extends Component {
  state = {
    text: false
  }

  componentDidMount() {
    this.textLoadHandler()
  }

  textLoadHandler = () => {
    this.setState({text: true})
  }

  render() {
    const { text } = this.state

    if (text) {
      return (
        <div>Loading Rock</div>
      )
    }

    return (
      <div className='row'>
        <div className='col-md-12'>Раздел /albums/rock</div>
      </div>
    )
  }
}
