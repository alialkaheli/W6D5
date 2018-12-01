import React from 'react';

class Tabs extends React.Component{
  constructor(props){
    super(props);
    this.state = { selectedTab: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const passed = this.props.array;

    let result = passed.map( (el, idx) => {
      let tag = '';
      if (idx === this.state.selectedTab) { tag = 'selected'; }

      return (
        <h1 id={idx} className={tag} onClick={ this.handleClick }>{ el.title }</h1>

      );
    });

    return (
      <ul>
        { this.state.selectedTab }
        { result }
      </ul>
    );
  }

  handleClick(e) {
    this.setState({selectedTab: e.target.id});
  }
}

export default Tabs;
