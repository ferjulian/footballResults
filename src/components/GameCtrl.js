import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class GameCtrl extends React.Component {

    state ={home:'', away:''}

    onFormSubmit = (event) => {

        event.preventDefault()

        const userResultHome = parseInt(this.state.home);
        const userResultAway = parseInt(this.state.away);

        this.props.btnChange('setTrue',userResultHome,userResultAway);

        this.setState({home:'', away:''});

    
    }

    render(){
        return(
            
        <div>
                    
            <form onSubmit ={this.onFormSubmit}>
                <div className="row text-center">
                
                    <div className="col"><input onChange={(event) => this.setState({home: event.target.value})} value={this.state.home} disabled={this.props.btnMode} placeholder="Home"/></div>
                    <div className="col"><input onChange={(event) => this.setState({away: event.target.value})} value={this.state.away} disabled={this.props.btnMode} placeholder="Away" /></div>
                
                </div>
                <div className="row">
                    
                    <div className="col text-center"><button disabled={this.props.btnMode}>Enviar</button></div>
                    
                </div>
                   
            </form>
                
        </div>
                
                );
    }
}

export default GameCtrl