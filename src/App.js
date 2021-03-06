import './App.css';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import history from './history';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
// PAGES
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import favorites from './pages/favorites';
// REDUX
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getCharacters } from './redux/actions/userAction';
// COMPONENTS
import Navbar from './components/Navbar';
import AuthRoute from './components/AuthRoute';

axios.defaults.baseURL =
  'https://europe-west1-mortyandrick-84fc9.cloudfunctions.net/api';

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getCharacters());
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/favorites" component={favorites} />
            <AuthRoute exact path="/login" component={login} />
            <AuthRoute exact path="/signup" component={signup} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
