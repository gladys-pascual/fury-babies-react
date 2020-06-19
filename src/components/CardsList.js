import React from 'react';
import Card from './Card'

const CardsList = (props) => {

  return (
    <div className="cards-list">
      {props.users.map(user => <Card {...user}/>)}
    </div>


  );
}

export default CardsList;