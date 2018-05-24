import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.css'

class Dnb extends Component {
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
    console.log(this.props.genres)
    const { text } = this.state

    if (text) {
      return (
        <div className='section'>{this.props.match.params.id}</div>
      )
    }

    return (
      <div >
        <div>Раздел /genre/d-n-b</div>
      </div>
    )
  }
}

//так выглядит наш селектор
//селектор - первый аргумент ф. коннект
//другой аргумент - actions
//третий аргумент - компонент

const mapStateToProps = state => {
  return {
    genres: state.genres,
  }
}

//function mapDispatchToProps(dispatch) {
//  return {
//    onLoadingGenreNames: bindActionCreators(onLoadingGenreNames, dispatch)
//  }
//}

// const actions = {
//   onLoadingGenreNames - что- то делает с именами
// }

//список жанров фетчиться по ссылке и записывается в genres
//затем нам нужно обновить хранилище, видимо, так как экшен обновляет хранилище
//нужен экшен, который загружает список жанров он берет их из state и обновляет хр
//


export default connect(mapStateToProps, null)(Dnb)
