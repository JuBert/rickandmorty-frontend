import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
// Components
import CharacterList from '../components/CharacterList';

const Favorites = () => {
  const [favCharacters, setFavCharacters] = useState(null);
  useEffect(async () => {
    await axios
      .get('/favorites')
      .then((results) => {
        setFavCharacters(results.data);
      })
      .catch((err) => console.log(err));
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
