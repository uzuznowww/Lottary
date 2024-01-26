import React, { Component } from 'react'
import LotteryTicket from './LotteryTicket';
import { Button, Typography, Divider } from 'antd';

const {Title} = Typography;


class Lottery extends Component {

  renderButton(){
    const { remainingTickets , actions} = this.props;

    if (remainingTickets > 0) {
      return <Button type = 'primary' block onClick={actions.registerTicket}>BUY TICKET</Button>
    }

    return <Button type='primary' block onClick={actions.finish}>Check for profit</Button>
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
        <Title>Lottery</Title>
        {this.renderButton() }
        <br/>
        <small>remaining: {this.props.remainingTickets} </small>
        <br />
        <Divider>Yours tickets</Divider>
        {this.renderTicket()}
      </>
    );
  }
}

export default Lottery;
