import React, { Component } from 'react'

export default class Dnb extends Component {
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
        <div>Loading Drum'n'Base</div>
      )
    }

    return (
      <div className='row'>
        <div className='col-md-12'>Раздел /genre/d-n-b</div>
      </div>
    )
  }
}
