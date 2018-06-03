import React, { Component } from 'react'

import PT from 'prop-types'

import { withRouter } from 'react-router'

import './styles.css'

class Genre extends Component {

  // setNameHandler = () => {
  //   this.props.setName(this.props.match.params.id)
  // }

  render() {
    console.log(this.props)

    //список песен

    return (
      <div >
        <div className='section'>//список песен</div>
        <ul>
          {this.props.renderRapSongs}
        </ul>
      </div>
    )
  }
}

Genre.propTypes = {
  setName: PT.func.isRequired
}


export default withRouter(Genre)