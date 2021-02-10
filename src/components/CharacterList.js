import React from 'react';
import '../App.css';
import axios from 'axios';
// REDUX
import { useDispatch } from 'react-redux';
import { updateFavorite } from '../redux/actions/userAction';

const CharacterList = (props) => {
  const dispatch = useDispatch();
  const characterId = props.character.id;
  const handleClick = (event) => {
    console.log(characterId);
    dispatch(updateFavorite(characterId));
  };
  return (
    <li className="character-li">
      <img className="character-img" src={props.character.image} />
      <button onClick={handleClick} className="character-button">
        +
      </button>
      {props.character.name}
    </li>
  );
};

export default CharacterList;
