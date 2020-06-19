import React from 'react';

const Card = ({ imageUrl, firstName, lastName, age, isAvailable }) => {
  const borderColor = isAvailable ? 'Green' : 'Red';
  const cardClass = `card ${borderColor}`;

  return (
    <div className={cardClass}>
      <img src={imageUrl} alt={firstName} />
      <p>{firstName} {lastName}</p>
      <p>Age: {age}</p>
      {isAvailable
        ? <p className="yes">{firstName} is available for a play date!  </p>
        : <p className="no">{firstName} is unfortunately unavailable right now. </p>}
    </div>
  )
}

export default Card;
