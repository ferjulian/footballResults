import React from 'react';
//import elenaSports from '../apis/ElenaSports';
import GameData from './GameData';
import GameCtrl from './GameCtrl';
import messi from '../assets/messi.jpg';


class App extends React.Component {
 
  state = {correctHome: 0, correctAway:0, info:'', btnMode: true, result:''}

  async componentDidMount(){
    
    /*const response = await elenaSports({
      method:'get',
      url:'/fixtures'
      //params: {page: '3'}
    });

    console.log(response.data.data[0].seasonName);*/
    }

    
    

    OnButtonClick = (argumento,userResultHome,userResultAway) => {
      

     const miHome = 3;
     const miAway = 1;
     const miInfo = 'Barcelona - Real Madrid, Santiago Bernabeu'
     
    //const correctHome = this.state.correctHome;
    //const correctAway = this.state.correct; 
     
        this.setState({correctHome: miHome, correctAway: miAway, info: miInfo, btnMode:false, result:''});

      if(argumento ==='setTrue'){
        this.setState({btnMode:true});
        
        if(userResultHome === miHome && userResultAway === miAway){
          this.setState({result: 'Correcto!'})
      
        }else{
          
          this.setState({result: 'Fallaste!'});
      }

     }
    }


  render(){
        return(
            <div>
              <h1>Football App</h1>
              <img src={messi} style={{width: 500, height:300}} alt="messi"></img>
              <GameData matchresult={this.state.data} matchinfo={this.state.info} />
              <button onClick={this.OnButtonClick}>Get</button>
              <GameCtrl correctHome={this.state.correctHome} correctAway ={this.state.correctAway} btnMode={this.state.btnMode} btnChange={this.OnButtonClick} />  
              <h1>{this.state.result}</h1>          
            </div>  
            
            
        );
    }
}

export default App;