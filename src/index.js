//
//
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.css';
import JSON from './db.json';

import Header from './components/header';
import NewsList from './components/news_list';

// import Footer from './components/footer';

class App extends Component {
  //
  //

  state = {
    news: JSON,
    filtered: [],
    footerText: 'I am a happy footer'
  };

  getKeywords = event => {
    let keywords = event.target.value;
    let filtered = this.state.news.filter(item => {
      return item.title.indexOf(keywords) > -1;
    });
    this.setState({
      filtered
    });
  };

  render() {
    const state = this.state;

    return (
      <div>
        <Header keywords={this.getKeywords} />
        <NewsList
          news={state.filtered.length === 0 ? state.news : state.filtered}
        >
          <br />
          <h1>I am a children bozo</h1>
        </NewsList>

        {/* <Footer footerText={this.state.footerText} /> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
