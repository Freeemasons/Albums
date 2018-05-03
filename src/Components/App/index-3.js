import React, { Component, Fragment } from 'react'

import './App.css'



class App extends Component {
  //поставили флаг
  //отображается состояние перед тем как компонент находится в DOM
  state = {
    albums: [],
    loading: false
  }

  componentWillMount () { //происходит подготовка к рендеру
    //прямо перед тем, как произойдет первый рендер
    //вызывается loadData объекта this (компонента)
    this.loadData()
  }

  loadData = () => { //описывается функция
    this.setState({ loading: true }) //изменяется состояние, которое флаг 2
    //и состояние будет в себе хранить новый объект: если оно изменяется на тру то показать
    //содержимое
    //при помощи метода Фетч интерфейса мы обращается к урлу
    //далее срабатывают обработчики, у нас только резолвы обрабатываются
    //получают данные
    //записывают данные: изменяется состояние

    fetch('https://jsonplaceholder.typicode.com/albums')//фетч должен быть в componentWillMount
      //чтобы вызвать что-то перед рендером, надо это делать в cwm
      //цепочка логическая ДЕЛАЕМ ЧТО-ТО ПЕРЕД РЕНДЕРОМ ->
      //РЕНДЕРИМ -> ОБРАБАТЫВАЕМ ТО, ЧТО ДЕЛАЛОСЬ ПЕРЕД РЕНДЕРОМ
      .then(response => response.json())
      .then(albums => this.setState({ albums, loading: false })) //нужно второй then сделать
      // и его аргумент в стейт положить
      // потому что надо куда-то записать то что пришло в ответ
  }

  handleRefresh = () => { //повторно вызывает loadData
    //привязываем контекст к экземпляру компонента
    //чтобы не перепривязывать при каждом рендере
    this.loadData()
  }

  render() { //метод рендер (единственный обязательный метод) отображает, что на странице
    const { albums, loading } = this.state //на поле albums иначе через const albums = this.state.albums

    if (loading) {
      return (
        <div className='App'>
          Loading
        </div>
      )
    }

    const albumList = albums.map(item => ( //мы пробегаемся по массиву, который в него пришел
      //при помози метода мап
      //который принимает анонимную функцию с параметром item массива
      //результат выполнения функции соотвествует каждому элементу массива
      //мы получаес див для них и вычисляемое значение свойств id, title
      <div className='App-album' key={item.id}>
        <div>Title: {item.title}</div>
      </div>
    ))

    return ( //результат вызова рендер
      <Fragment>
        <div className='App-header'>
          <input type='button' value='Refresh' onClick={this.handleRefresh} />
        </div>
        {albumList}
      </Fragment>
    )
  }
}

export default App
