import React from 'react';
import '../App.css';

const CharacterList = (props) => {
  return (
    <li className="character-li">
      <img className="character-img" src={props.character.image} />
      {props.character.name}
    </li>
  );
};

export default CharacterList;
