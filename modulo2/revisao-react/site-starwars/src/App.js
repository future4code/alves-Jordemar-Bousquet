import React, { Component } from 'react'
import CharacterDeatilPage from './pages/CharacterDetailPage/CharacterDeatilPage'
import CharacterListPage from './pages/CharacterListPage/CharacterListPage'

export default class App extends Component {
    state={
      currentScreen:'list',
      clikedCharacterUrl:''
    }

    goToDetailPage = (url) => {
      this.setState({currentScreen:'detail',clikedCharacterUrl:url})

    }

    goToListPage = () =>{
      this.setState({currentScreen:'list',clikedCharacterUrl:''})
    }

    selectPage = () => {
      switch(this.state.currentScreen){
        case 'list':
        return <CharacterListPage goToDetailPage={this.goToDetailPage}/>
        case 'detail':
          return <CharacterDeatilPage goToListPage={this.goToListPage} url={this.state.clikedCharacterUrl}/>
        default:
          return  <CharacterListPage goToDetailPage={this.goToDetailPage}/>

      }
    }


  render() {
    return (
      <div>
        {this.selectPage()}
        
      </div>
    )
  }
}
