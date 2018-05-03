import React, { Component } from 'react'

import './App.css'

class App extends Component { //get initial state
  state = {
    posts: [],
    loading: false //на основе флагов мы определяем поведение
  }

  componentWillMount () { //
    this.loadData()
  }

  loadData = () => {
    this.setState({ loading: true }) //2 флаг

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.setState({ //3 этап переустанавливаем флаг и сохраняем данные
          //и что- то с ними делаем
          //на котором завершение загрузки,
          //сохранение массива из полученных постов,
          //установка флага фалс

          posts: json,
          loading: false
        })
      })
  }

  handleRefresh = () => {
    this.loadData()
  }

  //чтобы внутри метода сослаться на this
  //обычный эрроу + определенный через =
  //таким образом мы получаем доступ ко всем полям app

  render () {
    const { loading, posts } = this.state
    //добавляем пост для
    //дефолтного варианта когда есть посты
    //posts - это массив

    //теперь нам нужно отобразить список постов
    //создадим переменную постс
    //методом мап пройдемся по массиву posts
    //получаем див и вычисляемые значения поле тайтл объекта айтем


    if (loading) {
      return (
        <div className='App'>
          Loading
        </div>
      )
    }

    const postList = posts.map(item => (
      <div className="App-post" key={item.id}>
        <div> Title: {item.title}</div>
        <div> Body: {item.body}</div>
      </div>
    ))

    return (
      <div className="App">
        <div className ='App-header'>
          <input type='button' value='Refresh' onClick={this.handleRefresh}/>
        </div>

        {postList}
      </div>
    )
  }
}

export default App
