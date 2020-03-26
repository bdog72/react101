//
//
import React from 'react';
import { Link } from 'react-router-dom';

const Profile = props => {
  return (
    <>
      <Link to={{ pathname: `${props.match.url}/posts` }}>Go To Posts</Link>
    </>
  );
};

export default Profile;
