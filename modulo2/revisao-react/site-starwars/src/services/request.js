import axios from "axios"
import BASE_URL from '../constants/urls'


export const getCharacter = () => {
    axios.get(this.props.url)
    .then((res) => this.setState({character:res.data}))
    .catch((err) => console.log(err.response))
  }

  export const getPlanet = () => {
    axios.get(this.state.character.homeworld)
    .then((res) => this.setState({planet:res.data.name}))
    .catch((err) => console.log(err.response))

  }

  export const getCharacterList = () => {
    axios.get(`${BASE_URL}/people`)
    .then((resp) => this.setState({characterList:resp.data.results}))
    .catch((err) => console.log(err.response))
}
