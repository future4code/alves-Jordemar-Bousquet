import React, { Component } from 'react'
import AddPlaylistScreen from './components/AddPlaylistScreen'
import PlayListScreen from './components/PlayListScreen'

export default class App extends Component {
  state = {
    currectScreen:"addPlaylist",
  }

  changeScreen = () => {
    switch (this.state.currectScreen){

      case "addPlaylist":
        return <AddPlaylistScreen playlistScreen ={this.goToPlaylist}/>
      case "Playlist":
        return <PlayListScreen addplaylist ={this.goToAddPlaylist}/>
      default:
        return <div>Erro! Página não encontrada :(</div>
    }
  }

  goToAddPlaylist = () =>{
    this.setState({currectScreen:'addPlaylist'})
  }

   goToPlaylist = () =>{
    this.setState({currectScreen:'Playlist'})
  }


  render() {
    return (
      <div>
        {this.changeScreen()}
      </div>
    )
  }
}
