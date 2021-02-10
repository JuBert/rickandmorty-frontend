import React, { useEffect } from 'react';
import '../App.css';
// Components
import CharacterList from '../components/CharacterList';
// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { getFavorites } from '../redux/actions/userAction';

const Favorites = () => {
  let favCharacters = useSelector((state) => state.user.favCharacters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, [favCharacters]);

  let favCharacterMarkup = favCharacters ? (
    favCharacters.map((character) => (
      <CharacterList key={character.id} character={character} />
    ))
  ) : (
    <p>loading...</p>
  );
  return (
    <div>
      <h1>Favorites page</h1>
      <ul className="character-list">{favCharacterMarkup}</ul>
    </div>
  );
};

export default Favorites;
