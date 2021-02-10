import React, { useEffect } from 'react';
import '../App.css';
// Components
import CharacterList from '../components/CharacterList';
// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '../redux/actions/userAction';

const Home = () => {
  const characters = useSelector((state) => state.user.characters.results);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
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
      <h1 style={{ marginLeft: 40 }}>Home page</h1>
      <ul className="character-list">{characterMarkup}</ul>
    </div>
  );
};

export default Home;
