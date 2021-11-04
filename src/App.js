import {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BodyHome from './Components/BodyHome';

import Footer from './Components/Footer';
import AllMovies from './Components/AllMovies';
import BodyHomeMore from './Components/BodyHomeMore';

function App() {
  const [showGoToTop, setShowGoToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1)
    {
      setShowGoToTop(true)
    } else {
      setShowGoToTop(false)
    }
  }

  const handleGoToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <Router>
      <div className="app">
        <div className="app-wrap">
          <Header />
          <Switch>
            <Route exact path="/"><BodyHome /></Route>
            <Route path="/home"><BodyHome /></Route>
            <Route path="/categories"><AllMovies /></Route>
          </Switch>
          <Footer />
          {
            showGoToTop && (
              <button className="btn-gototop" onClick={handleGoToTop}>
                <i className="btn-gototop-icon fas fa-arrow-up"></i>
              </button>
            )
          }
          <BodyHomeMore />
        </div>
      </div>
    </Router>
  );
}

export default App;
