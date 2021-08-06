import React from 'react'
import escudo from '../assets/escudo.svg'

class GameData extends React.Component {


    onButtonClick = () =>{
        console.log('Mi deira');
    }

    render(){
        return (
            <div className="text-center">

                <div className="row">
                <div className="col-3"><img className="escudo" src={escudo} alt="escudo"></img></div>
                <div className="col-3">{this.props.matchData.scoreHome}</div>
                <div className="col-3">{this.props.matchData.scoreAway}</div>
                <div className="col-3"><img className="escudo" src={escudo} alt="escudo"></img></div>
                </div>
                <div className="row">
                <div className="col-3">{this.props.matchData.home}</div>
                <div className="col-3"></div>
                <div className="col-3"></div>
                <div className="col-3">{this.props.matchData.away}</div>
                </div>
                <div className="row">
                    <p>Partido disputado en el torneo {this.props.matchData.season} en el estadio {this.props.matchData.venue}</p>
                </div>
            </div>                );
    }
}

export default GameData;