import React, { Component } from 'react'
import './PokeFetch.css';


class PokeFetch extends Component {
  constructor() {
    super()
    this.state = {
      timeLeft: 10,
      pokeInfo: '',
      pokeSprite: '',
      pokeName: '',
    }
  }
  

  fetchPokemon() {
    let min = Math.ceil(1);
    let max = Math.floor(152);
    let pokeNum = Math.floor(Math.random() * (max - min) + min);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`, {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        this.setState({
          pokeInfo: res,
          pokeSprite: res.sprites.front_default,
          pokeName: res.species.name,
        })
      })
      .catch((err) => console.log(err))
  }

  componentDidMount(){
    this.interval = setInterval(
        () => this.setState({
            timeLeft: this.state.timeLeft - 1
        }), 1000)
}

componentDidUpdate(prevProps, prevState){
    if (prevState.timeLeft == 1){
        clearInterval(this.interval)
    }
}

componentWillUnmount(){
    clearInterval(this.interval)
}

  render() {
    return (
      <div className={'wrapper'}>
        <button className={'start'} onClick={() => this.fetchPokemon()}>Start!</button>
        <h1 className={'timer'} >{this.state.timeLeft}</h1>
        <div className={'pokeWrap'}>
          <img className={'pokeImg'} src={this.state.pokeSprite} />
          <h1 className={'pokeName'}>{this.state.pokeName}</h1>
        </div>
      </div>
    )
  }
}

export default PokeFetch;