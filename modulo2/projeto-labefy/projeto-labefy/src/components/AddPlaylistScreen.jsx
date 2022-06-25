import axios from 'axios'
import React, { Component } from 'react'

export default class addPlaylistScreen extends Component {
  state ={
    PlaylistName:""
  }

  handlePlaylistName = (event) => {
      this.setState({PlaylistName: event.target.value})
  }

  createPlaylist = () =>{
     const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
     const body = {
      name:this.state.PlaylistName
     }
     axios.post(url,body,{
      headers:{
        Authorization:"jordemar-bousquet-alves"
      }
     }).then((resp)=> {alert('Playlist Adicionada')
        this.setState({PlaylistName:''})  
    })
      .catch((err) => alert(err.response.data))
  }

  render() {
    return (
      <div>
        <button onClick={this.props.playlistScreen} >Ir para Playlist</button>

        <h2>Adicionar Playlist</h2>
        <input 
        placeholder = "Nome"
        value ={this.state.PlaylistName}
        onChange ={this.handlePlaylistName}
        />
        <button onClick={this.createPlaylist}>Adicionar</button>
        

        
      </div>
    )
  }
}
