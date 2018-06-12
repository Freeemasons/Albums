import React, { Component, Fragment } from 'react'

import {
    Link
} from 'react-router-dom'

import { connect } from 'react-redux'

import { withRouter } from 'react-router'

import PT from 'prop-types'

import {
    loadSongInfo
    } from '../../actions/GenreActions'

import '../App/App.css'

import "../../../node_modules/video-react/dist/video-react.css"

import { Player } from 'video-react';

class Song extends Component {

    componentDidMount() {
        const { genre, songId } = this.props.match.params
        this.props.loadSongInfo(genre, songId)
        
        // this.props.loadSongInfo(this.props.match.params.genre.songId)
        
    }

    SongsInfo = () => {
        const { match, song } = this.props
        console.log(this.props)
        const mySong = song.dataSongInfo.map((el) => {
            return (
                <li className='App-listItem' key={el.id}>
                    <iframe width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/km6kv5xc7hY" 
                        frameBorder="0" 
                        allow="autoplay; encrypted-media" 
                        allowFullScreen>
                    </iframe>
                    <div className='App-album'>Text: {el.createdAt}</div>
                </li>
            )
        })
        return mySong
    }

//     <Player
//     playsInline
//     poster="/assets/poster.png"
//     src={el.video}
// />
//     <Link
//     to={`${match.url}/${el.id}`}
//     className="App-link">
    
//     {el.text}
// </Link>

// у каждой песни при переходе есть свой уникальный match.url 
// в нем отражается путь, genre: songId: который прописан в главном компоненте роутов
// это приходит в params
// не совсем понятно, как передать оба этих параметра, мы передавали только 1
// - надо как-то связать это с выгрузкой массива, что когда ты нажал, как-то подцепилась именно та песня

    render() {

        const { match, song } = this.props

        if (song.isLoading) {
            return (
                <div>Song Info isLoading</div>
            )
        }

        return (
            <Fragment>
                <Link to="/genres">К списку жанров</Link>
                <ul className='App-ul'>
                    {this.SongsInfo()}
                </ul>


            </Fragment>
        )
    }
}

Song.propTypes = {
    loadSongInfo: PT.func.isRequired,
    song: PT.shape({
        isLoading: PT.bool.isRequired,
        dataSongInfo: PT.array.isRequired,
        errorMsg: PT.string,
    }).isRequired
}

const mapStateToProps = (state) => {
    return {
        song: state.song
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadSongInfo: (genreName, songId) => (dispatch(loadSongInfo(genreName, songId)))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Song)) 