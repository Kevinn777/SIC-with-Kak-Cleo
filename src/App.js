import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';  
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        
      <Route path="/signin">
          <SignIn></SignIn>
        </Route>

        <Route path="/signup">
          <SignUp></SignUp>
        </Route>

        <Route path="/">
          <Home/>
        </Route>
        

      </Switch>
    </Router>
  );
}

export default App;
