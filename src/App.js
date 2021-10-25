import './App.css';
import Header from './Components/Header.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BodyHome from './Components/BodyHome';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app-wrap">
          <Header />
          <Switch>
            <Route exact path="/"><BodyHome /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
