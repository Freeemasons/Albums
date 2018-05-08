import React, { Component } from 'react'

import './styles.css'

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
        <div className='section'>Loading Drum'n'Base</div>
      )
    }

    return (
      <div >
        <div>Раздел /genre/d-n-b</div>
      </div>
    )
  }
}
