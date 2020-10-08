import React from 'react';
import S from './Nav.module.css';

const Nav = () => {
  return <nav className={S.nav}>
    <div className={S.item}>
      <a>Profile</a>
    </div>
    <div className={S.item}>
      <a>Messages</a>
    </div>
    <div className={S.item}>
      <a>News</a>
    </div>
    <div className={S.item}>
      <a>Music</a>
    </div>
    <div className={S.item}>
      <a>Settings</a>
    </div>
  </nav>
}

export default Nav;