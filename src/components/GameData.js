import React from 'react'

class GameData extends React.Component {


    onButtonClick = () =>{
        console.log('Mi deira');
    }

    render(){
        return (
            <div>
                <div>{this.props.matchinfo}</div>
                <div>{this.props.matchresult}</div>
            </div>
        );
    }
}

export default GameData;