import React, { Component } from 'react'
import LotteryTicket from './LotteryTicket';


class Lottery extends Component {

  renderButton(){
    const { remainingTickets , actions} = this.props;

    if (remainingTickets > 0) {
      return <button onClick={actions.registerTicket}>BUY TICKET</button>
    }

    return <button onClick={actions.finish}>Check for profit</button>
  }

  renderTicket(){
    const{tickets, actions} = this.props;

    const lotteryTicketActions = {removeTicket: actions.removeTicket};
    const lotterTickets = tickets.map((ticket, index) => {
      return(
        <LotteryTicket
        actions = {lotteryTicketActions }
        color = {ticket.color}
        number = {ticket.number}
        index = {index}
        key = {index}
        />
      )
    });

    return lotterTickets;
  }

  render(){
    return(
      <>
        <h2>Lottery</h2>
        {this.renderButton() }
        <br/>
        <small>remaining: {this.props.remainingTickets} </small>
        <br />
        <hr />
        {this.renderTicket()}
      </>
    );
  }
}

export default Lottery;
