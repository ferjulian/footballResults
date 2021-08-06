import React from 'react';
import elenaSports from '../apis/ElenaSports';
import GameData from './GameData';
import GameCtrl from './GameCtrl';
import messi from '../assets/messi.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
 
  state = {matchData:{}, btnMode: true, result:''}


  OnButtonClick = async (argumento,userResultHome,userResultAway) => {

    let fixtureNum = Math.floor(Math.random()*(141140-140759+1)+140759);  

      if(argumento !== 'setTrue'){
        
        

        const response = await elenaSports({
          method:'get',
          url: `/fixtures/${fixtureNum}`
        });
    
       let myRequest = response.data.data[0];
    
      
    
       let matchInfo = {
         away: myRequest.awayName,
         home: myRequest.homeName,
         season: myRequest.seasonName,
         venue: myRequest.venueName,
         scoreAway: myRequest.team_away_90min_goals,
         scoreHome: myRequest.team_home_90min_goals
        }

        this.setState({btnMode: false, matchData: matchInfo, result:''});
  
      }
      
      
      if(argumento ==='setTrue'){
      this.setState({btnMode:true});
      
      if(userResultHome === this.state.matchData.scoreHome && userResultAway === this.state.matchData.scoreAway){
        this.setState({result: 'Correcto!'})
    
      }else{
        
        this.setState({result: 'Fallaste!'});
    }

   }

    }



  render(){
        return(
            <div className="container">
              <div className="row">
                    <span className="text-center"><h1>Football App</h1></span>  
                </div>
                <div className="row">
                    <span className="text-center"><img className="img-fluid" src={messi} alt="messi" ></img></span>  
                </div>
                <div className="row">
                  <GameData  matchData={this.state.matchData} />  
                </div>
                <div className="row">
                    
                    <div className="col text-center"><button onClick={this.OnButtonClick}>Get</button></div>
                    
                </div>
                
                <GameCtrl correctHome={this.state.correctHome} correctAway ={this.state.correctAway} btnMode={this.state.btnMode} btnChange={this.OnButtonClick} />

              <h1>{this.state.result}</h1>

            </div>
                        
           
            
            
        );
    }
}

export default App;