import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return <div className={s.content}>
  <div>
    <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"></img>
  </div>
  <div>
    ava + description
  </div>
  <div>
    my posts
    <div>
      new post
    </div>
    <div>
      post 1
    </div>
    <div>
      post 2
    </div>
  </div>
  </div>
}

export default Profile;