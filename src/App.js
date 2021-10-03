import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/SignIn';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <SignIn/>
        </Route>
        <Route path="/">
          <p>Kosong</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;