//
//
import React, { useEffect } from 'react';

import '../styles/Post.css';

const Post = ({ item }) => {
  useEffect(() => {
    console.log('Post Created');

    return () => {
      console.log('Component Exit');
    };
  }, []);

  return (
    <div>
      <div>Name: {item.name} </div>
      <div>Body: {item.body} </div>
      <hr className="Post_hr" />
    </div>
  );
};

export default Post;
