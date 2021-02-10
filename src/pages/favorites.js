import React, { useEffect } from 'react';
import '../App.css';
// Components
import CharacterList from '../components/CharacterList';
// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { getFavorites } from '../redux/actions/userAction';

const Favorites = () => {
  const favCharacters = useSelector((state) => state.user.favCharacters);
  console.log(favCharacters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);
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
