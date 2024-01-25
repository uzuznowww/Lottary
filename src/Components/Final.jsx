import React, { Component } from 'react'

import { getRandomColor } from '../Helper/Utils';


class Final extends Component {
  isWinnig(){
    const {tickets, winningNumber} = this.props;
    
    for(const ticket of tickets){
      if (ticket.number === winningNumber) {
        return true;
      }
    }

    return false;
  }
    renderWinnig(){
      <>
      <h2>Congratulations!</h2>
      <h3>You win 1000$</h3>
      <p>Your winning number was:<b>{this.props.winningNumber}</b></p>
      </>
    }

    renderTryAgain(){
      <>
      <h2>Try Again!</h2>
      <p>Winning number was:<b>{this.props.winningNumber}</b></p>
      </>
    }

  render(){
    return(
      <div style={{backgroundColor: getRandomColor(), padding: 15}}>
          {this.isWinnig() ? this.renderWinnig() : this.renderTryAgain() }
      </div>
    )
  }
}

export default Final;
