//
//

import React, { Component } from 'react';

class Header extends Component {
  //
  //

  // constructor() {
  //   super();
  //   this.inputChange = this.inputChange.bind(this);
  // }

  state = {
    active: false
    // keywords: ''
  };

  // inputChange(event) {
  //   const value = event.target.value === '' ? false : true;
  //   this.setState({
  //     active: value,
  //     keywords: event.target.value
  //   });
  // }

  render() {
    return (
      <header style={{ background: `${this.state.active ? 'red' : 'blue'}` }}>
        <div className="logo">Bozo Logo</div>
        <input onChange={this.props.keywords} />
      </header>
    );
  }
}

export default Header;
