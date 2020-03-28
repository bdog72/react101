import React, { Component } from 'react';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import '../css/App.css';

class Slide extends Component {
  state = {
    items: ['10', '20', '30']
  };

  showElements() {
    return this.state.items.map((item, i) => (
      <CSSTransition
        classNames="item"
        timeout={500}
        key={i}
        appear={true}
        onEntered={node => {
          node.classList.add('active');
        }}
      >
        <div className="item">{item}</div>
      </CSSTransition>
    ));
  }

  // prettier-ignore
  generateNumber() {
    let newArray = [
      ...this.state.items,
      Math.floor(Math.random() * 100) + 1      
    ];

    this.setState({
      items: newArray
    })
  }

  removeNumber() {
    let newArray = this.state.items.slice(0, -1);

    this.setState({
      items: newArray
    });
  }

  render() {
    return (
      <div>
        <TransitionGroup component="div" className="list">
          {this.showElements()}
        </TransitionGroup>

        <div className="btns">
          <div className="btn-add" onClick={() => this.generateNumber()}>
            Add Elements
          </div>
          <div className="btn-remove" onClick={() => this.removeNumber()}>
            Remove Elements
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
