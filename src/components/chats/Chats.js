import React from 'react';
import './Chats.css';
import Chat from './Chat';

const Chats = () => {
  return (
    <div className='chats'>
      <Chat
        name='Ellen'
        message='Whats up ♥️?'
        timestamp='55 minutes ago'
        profilePic='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed560d07fe4060006bbce1e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D422%26cropX2%3D1300%26cropY1%3D0%26cropY2%3D879'
      />
      <Chat
        name='Steve'
        message='How are you?'
        timestamp='2 hours 30 minutes ago'
        profilePic='https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
      />
      <Chat
        name='Jack'
        message='What are you doing?'
        timestamp='3 hours 19 minutes ago'
        profilePic='https://avatars0.githubusercontent.com/u/2308123?s=460&v=4'
      />
    </div>
  );
};

export default Chats;
