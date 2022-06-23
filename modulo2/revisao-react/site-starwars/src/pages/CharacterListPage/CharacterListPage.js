import axios from 'axios'
import React, { Component } from 'react'
import { BASE_URL } from '../../constants/urls'
import {CharacterCards} from './styled'

export default class CharacterListPage extends Component {
    state={
        characterList: []
    }

    componentDidMount(){
        this.getCharacterList()
    }

    getCharacterList = () => {
        axios.get(`${BASE_URL}/people`)
        .then((resp) => this.setState({characterList:resp.data.results}))
        .catch((err) => console.log(err.response))
    }

  render() {
    const characters = this.state.characterList.map((person) => {
        return <CharacterCards 
        key ={person.url}
        onClick = {() => this.props.goToDetailPage(person.url)}>
        {person.name}
        </CharacterCards>

    }) 
    return (
      <div>{characters}</div>
    )
  }
}
