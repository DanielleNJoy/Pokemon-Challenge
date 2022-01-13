import React, { Component } from 'react'
import PokeFetch from '../PokeFetch/PokeFetch';

export class Timer extends Component {

    state = {
        timeLeft: 10
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
        console.log(this.state);
        return (
            <>
            {this.state.timeLeft > 0 
            ?
            <>
            <div>
               <p id="time">{this.state.timeLeft} <br/>sec </p>
            </div>
            </>
            :
            <div id="kaboom">
                <PokeFetch/>
            </div>
            }
            </>
        )
    }
}

export default Timer