import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
// Components
import CharacterList from '../components/CharacterList';

const Home = () => {
  const [characters, setCharacters] = useState(null);
  useEffect(async () => {
    await axios
      .get('/characters')
      .then(({ data: { results } }) => {
        setCharacters(results);
      })
      .catch((err) => console.log(err));
  }, []);
  let characterMarkup = characters ? (
    characters.map((character) => (
      <CharacterList key={character.id} character={character} />
    ))
  ) : (
    <p>loading...</p>
  );
  return (
    <div>
      <h1>Home page</h1>
      <ul className="character-list">{characterMarkup}</ul>
    </div>
  );
};

export default Home;
