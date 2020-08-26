import React, { useState } from 'react';
import './ChatScreen.css';

import Avatar from '@material-ui/core/Avatar';

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      name: 'Ellen',
      image:
        'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed560d07fe4060006bbce1e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D422%26cropX2%3D1300%26cropY1%3D0%26cropY2%3D879',
      message: 'whats up',
    },
    {
      name: 'Ellen',
      image:
        'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed560d07fe4060006bbce1e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D422%26cropX2%3D1300%26cropY1%3D0%26cropY2%3D879',
      message: 'Hows it going?',
    },
    { message: 'Hi! How are you Ellen!' },
  ]);

  return (
    <div className='chatScreen'>
      <p>YOU MATCHED WITH ELEEN ON 10/8/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className='chatScreen__message'>
            <Avatar
              src={message.image}
              alt={message.name}
              className='chatScreen__image'
            />
            <p className='chatScreen__text'>{message.message}</p>
          </div>
        ) : (
          <div className='chatScreen__message'>
            <p className='chatScreen__textUser'>{message.message}</p>
          </div>
        )
      )}
    </div>
  );
};

export default ChatScreen;
