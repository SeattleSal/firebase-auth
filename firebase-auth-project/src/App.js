import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignUpPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/welcome" component={WelcomePage}/>
      </Switch>
    </Router>
  );
}

export default App;
