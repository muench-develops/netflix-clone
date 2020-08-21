import React from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faGift,
  faBell,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return (
    <div className='navbar'>
      <div className='nav-left'>
        <span className='navBrand'>Netflix</span>
        <span className='nav-item'>Home</span>
        <span className='nav-item'>TV Shows</span>
        <span className='nav-item'>Movies</span>
        <span className='nav-item'>Latest</span>
      </div>
      <div className='nav-right'>
        <span className='nav-item'>
          <FontAwesomeIcon className='nav-item-icon' icon={faSearch} />
        </span>
        <span className='nav-item'>kids</span>
        <span className='nav-item'>
          <FontAwesomeIcon className='nav-item-icon' icon={faGift} />
        </span>
        <span className='nav-item'>
          <FontAwesomeIcon className='nav-item-icon' icon={faBell} />
        </span>
        <span className='nav-item'>
          <FontAwesomeIcon className='nav-item-icon' icon={faLock} />
        </span>
      </div>
    </div>
  );
}

export default Nav;
