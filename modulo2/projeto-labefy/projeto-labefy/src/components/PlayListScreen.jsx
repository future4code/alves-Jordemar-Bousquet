import axios from 'axios'
import React, { Component } from 'react'
import styled from 'styled-components'

const Cardpalylist = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    `

export default class playListScreen extends Component {
    state = {
      playlists:[],
    }


    componentDidMount(){
      this.getPlaylist()
    }


    getPlaylist = async() =>{
      const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
      try {
        const resp = await axios.get(url, {
            headers:{
              Authorization: 'jordemar-bousquet-alves'
            }
        })

        this.setState({playlists:resp.data.result.list})
      
      
        
      }catch(err) {
        alert('Erro!! Tente Novamente :(')
      } 


    } 

    deletePlaylist= (id) =>{
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
      axios.delete(url,{
        headers:{
          Authorization: 'jordemar-bousquet-alves'
        }
      }).then((resp) =>{
        alert("Playlist deletada com sucesso!")
        this.getPlaylist()
      } )
        .catch((err) =>{
          alert("Ocorreu um erro, tente novamente!!")
        })
      }
    

  render(){
    const listPlaylist = this.state.playlists.map((play)=>{
      return (
        <Cardpalylist key={play.id}>{play.name}
         <button onClick={() => this.deletePlaylist(play.id)}>X</button>
        </Cardpalylist>
        
      )
    })
  
    
    return (
      <div>
        <button onClick={this.props.addplaylist}> Adicionar Playlist </button>

        <h2>Tela de Playlist</h2>
        {listPlaylist}
        </div>
    )
  }
}


