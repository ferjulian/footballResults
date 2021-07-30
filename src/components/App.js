import React from 'react';
import elenaSports from './ElenaSports';


class App extends React.Component {
 
  state = {data: '', joke:''}

  async componentDidMount(){
    
    const response = await elenaSports({
      method:'get',
      params: {
        page: '2'
      }
    });

    console.log(response);

    }



  render(){
        return(
            <div>
        
                <button onClick={this.OnButtonClick}>Get!</button>
            </div>  
            
            
        );
    }
}

export default App;