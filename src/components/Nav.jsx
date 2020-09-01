
import React from 'react';
import {Link } from '@reach/router';

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        Home
      </Link>
      <Link to="/articles">
        Articles
      </Link>
      <Link to="/topics">
        Topics
      </Link>
    </nav>
  )
}
