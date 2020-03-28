import React, { Component } from 'react';

import { Transition } from 'react-transition-group';

import '../css/App.css';

class TransitionComp extends Component {
  state = {
    show: true
  };

  showDiv = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <>
        {/* prettier-ignore */}
        <Transition in={this.state.show} timeout={2000}>
          {state => (
            <div className={`square square-${state}`}>
              {state.toUpperCase()}
            </div>
          )}
        </Transition>

        <div className="showDiv" onClick={this.showDiv}>
          Show/Hide
        </div>
      </>
    );
  }
}

export default TransitionComp;
