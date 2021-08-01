import React from 'react';

class GameCtrl extends React.Component {

    state ={home:'', away:''}

    onFormSubmit = (event) => {

        event.preventDefault()

        //const correctResultHome = this.props.correctHome;
        //const correctResultAway = this.props.correctAway;
        const userResultHome = parseInt(this.state.home);
        const userResultAway = parseInt(this.state.away);

        this.props.btnChange('setTrue',userResultHome,userResultAway);

        this.setState({home:'', away:''});

    
    }

    render(){
        return(
            <div>
                <form onSubmit ={this.onFormSubmit}>
                <input onChange={(event) => this.setState({home: event.target.value})} value={this.state.home} disabled={this.props.btnMode} />
                <input onChange={(event) => this.setState({away: event.target.value})} value={this.state.away} disabled={this.props.btnMode} />

                
                
                <button disabled={this.props.btnMode}>Enviar</button>
                </form>

                
                
            </div>
        );
    }
}

export default GameCtrl