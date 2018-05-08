import React, { Component } from 'react'

import './styles.css'

export default class RAP extends Component {

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
        <div className='section'>Loading RAP</div>
      )
    }

    return (
      <div>
        <div>Раздел /genre/rap</div>
      </div>
    )
  }
}
