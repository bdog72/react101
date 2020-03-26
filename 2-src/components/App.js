//
//
import React, { useState, useEffect } from 'react';

import Post from './Post';

import '../styles/App.css';

const App = ({ initialCount }) => {
  //

  let [state, setState] = useState({
    count: initialCount,
    name: 'Bozo'
  });

  let [posts, setPosts] = useState([
    {
      name: 'Super Awesome Posts',
      body: 'Everything is awesome when you are part of a team'
    }
  ]);

  // useEffect(() => {
  //   console.log(state.count);
  // }, [state]);

  useEffect(() => {
    console.log('Mounted');
  }, []);

  const restOne = () => {
    setState(prevState => {
      return { ...prevState, count: state.count - 1 };
    });
  };

  const addOnePost = () => {
    let newPost = {
      name: 'Super Awesome Post 2',
      body: 'You are a Bozo Beak'
    };

    setPosts([...posts, newPost]);
  };

  const removePosts = () => {
    setPosts([]);
  };

  return (
    <>
      <h1>{state.name}</h1>
      <h3>Count: {state.count}</h3>
      <button
        className="App_button"
        onClick={() => setState({ ...state, count: state.count + 1 })}
      >
        Add One
      </button>
      <button className="App_button" onClick={restOne}>
        Subtract One
      </button>
      <button
        className="App_button"
        onClick={() => setState({ ...state, count: initialCount })}
      >
        Reset
      </button>
      <br />
      <hr className="App_hr" />
      {posts.map((post, i) => {
        return <Post item={post} key={i} />;
      })}
      <button onClick={addOnePost}>Add One Post</button>
      <button onClick={removePosts}>Remove Post</button>
    </>
  );
};

export default App;
