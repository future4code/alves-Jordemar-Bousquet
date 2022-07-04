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

const CardMusic = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
display: block;
`

 
  

export default class playListScreen extends Component {
    state = {
      playlists:[],
      tracks:[],
      nameMusic:"",
      nameArtist:"",
      linkMusic:"",
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
        console.log(resp.data)
      
      
        
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

      getNameMusic = (e) =>{
        this.setState({nameMusic:e.target.value})

      }

      getNameArtist = (e) =>{
        this.setState({nameArtist:e.target.value})
        
      }

      getLinkMusic = (e) =>{
        this.setState({linkMusic:e.target.value})
      }


      addMusicPlaylist = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
          name: this.state.nameMusic,
          artist: this.state.nameArtist,
          url: this.state.linkMusic,
        }
        axios.post(url,body,{
          headers:{
            Authorization: 'jordemar-bousquet-alves'
          }
        }).then((resp) => {alert('Musica Adicionada a Playlist :)')
          this.setState({nameMusic:"", nameArtist:"",linkMusic:""})
        })
          
          .catch((err) => alert(err.response.data))

      }

      getPlaylistTracks = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        axios.get(url,{
          headers:{
            Authorization: 'jordemar-bousquet-alves'
          }
        }).then((resp)=>{
          this.setState({tracks:resp.data.result.tracks})
        })
          .catch((err)=> {
            alert(err.response.data)
          })
      }    

  render(){
    const listTrack = this.state.tracks.map((track) =>{
          return (
            <div>
            <p><strong>Musica:</strong>{track.name}</p>
            <p><strong>Artista:</strong>{track.artist}</p>
            <p><a href={track.url} target="_blank" rel='noreferrer'><button >Play</button></a></p>
            </div>
          )
    })

    const listPlaylist = this.state.playlists.map((play)=>{
      return (
        <div>
        <Cardpalylist key={play.id}><strong>{play.name}</strong>
          <button onClick={() => this.getPlaylistTracks(play.id)}>Ver Musicas</button>
          <button onClick={() => this.deletePlaylist(play.id)}>X</button>
          
         
        </Cardpalylist>
  
        <CardMusic>
          <p>Adicionar Musica a Playlist {play.name}</p>
          <input 
          placeholder='Nome da Música'
          onChange ={this.getNameMusic}
          />
          <input 
          placeholder='Nome do Artista ou Banda'
          onChange={this.getNameArtist}
          />
          <input
           placeholder='Link da Música'
           onChange={this.getLinkMusic}
           />
          <button onClick={() =>this.addMusicPlaylist(play.id)}>Adicionar</button>
        </CardMusic>
        </div>
        
      ) 
    })
  
    
    return (
      <div>
        <button onClick={this.props.addplaylist}> Adicionar Playlist </button>

        <h2>Tela de Playlist</h2>
        {listPlaylist}
        <h2>Musicas da Playlist</h2>
        {listTrack}
        </div>
    )
  }
}


