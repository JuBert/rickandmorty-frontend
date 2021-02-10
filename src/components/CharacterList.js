import React from 'react';
import '../App.css';
import axios from 'axios';
// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { updateFavorite } from '../redux/actions/userAction';

const CharacterList = (props) => {
  const character = useSelector((state) => state.user.favCharacters);
  const dispatch = useDispatch();
  const characterId = props.character.id;
  const handleClick = (event) => {
    dispatch(updateFavorite(characterId));

    // axios
    //   .get(`/characters/${props.character.id}`)
    //   .then(() => {
    //     return console.log('Added new favorite');
    //   })
    //   .catch((err) => console.log(err));
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
