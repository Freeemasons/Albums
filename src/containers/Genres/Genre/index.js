import React, { Component } from 'react'

import PT from 'prop-types'

import {
  Link
} from 'react-router-dom'

import { withRouter } from 'react-router'

import { connect } from 'react-redux'

import {
  loadSonglist
} from '../../../actions/GenreActions'

import './styles.css'

class Genre extends Component {

  componentDidMount() {
    this.props.loadSonglist(this.props.match.params.id)
  }

  renderSongs = () => {
    const { match } = this.props
    const Songs = this.props.genre.dataSongList.map((el) => {
      return (
        <li className='App-listItem' key={el.id}>
          <Link
            to={`${match.url}/${el.id}`}
            className="App-link">
            {el.video}
          </Link>
        </li>
      )
    })
    return Songs
  }

  render() {
    console.log(this.props)

    //список песен

    return (
      <div >
        <div className='section'>//список песен</div>
        <ul>
          {this.renderSongs()}
        </ul>
      </div>
    )
  }
}

Genre.propTypes = {
  loadSonglist: PT.func.isRequired,
  genre: PT.shape({
    isLoading: PT.bool.isRequired,
    dataSongList: PT.array.isRequired,
    errorMsg: PT.string,
  }).isRequired
}

const mapStateToProps = (state) => {
  return {
    genre: state.genre
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSonglist: (genreName) => (dispatch(loadSonglist(genreName)))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Genre))