import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
    this.handle = 0;

    this.tick = this.tick.bind(this);
  }

  tick(){
    this.setState({date: new Date()});
  }

  componentDidMount(){
    // debugger;
    this.handle = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.handle);
    this.handle = 0;
  }

  render(){
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (<div><p>{ this.state.date.getHours() }:{ this.state.date.getMinutes() }:{ this.state.date.getSeconds() } PDT</p>
    <br />
  <p>{ days[this.state.date.getDay()] } { months[this.state.date.getMonth()] } { this.state.date.getDate() } { this.state.date.getFullYear() }</p>
    </div>);
  }
}

export default Clock;
