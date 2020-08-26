import React, { useState } from 'react';
import './TinderCards.css';

import TinderCard from 'react-tinder-card';

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: 'Steve Jobs',
      url:
        'https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg',
    },
    {
      name: 'Mark Zuckerberg',
      url:
        'https://bsmedia.business-standard.com/_media/bs/img/article/2018-07/25/full/1532525428-0063.jpg',
    },
  ]);

  return (
    <div>
      <h1>TinderCards</h1>
      <div className='tinderCards__cardContainer'>
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className='card'
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
