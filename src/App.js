import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from './history';

// PAGES
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import favorites from './pages/favorites';

// COMPONENTS
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/login" component={login} />
            <Route exact path="/signup" component={signup} />
            <Route exact path="/favorites" component={favorites} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
