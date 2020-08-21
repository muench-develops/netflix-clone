import React from 'react';
import './nav.css';

function Nav() {
  return (
    <div className='navbar'>
      <div className='nav-left'>
        <span class='navBrand'>Netflix</span>
        <span>Home</span>
        <span>TV Shows</span>
        <span>Movies</span>
        <span>Latest</span>
      </div>
      <div className='nav-right'>
        <span>bla</span>
        <span>bla</span>
        <span>bla</span>
      </div>
    </div>
  );
}

export default Nav;
