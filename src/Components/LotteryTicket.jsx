import React, { Component } from 'react'


class LotteryTicket extends Component {

  render(){
    const{actions, index, color, number} = this.props;
    return(
      <div style={{ 
        backgraundColor: color, 
        padding: 5, 
        width: '60%',
        margin:'auto'
        }}
        >
          <button
           style={{float: 'left'}}
           onClick={() => actions.removeTicket(index)}
           >X</button>
          <small>This ticket has the number<b>{number}</b></small>
      </div>
    );
  }
}

export default LotteryTicket;
