import './App.css';
import Header from './Components/Header.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BodyHome from './Components/BodyHome';
import {useState, useEffect} from 'react'
import Footer from './Components/Footer';

function App() {
  const [showGoToTop, setShowGoToTop] = useState(false)

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
          </Switch>
          <Footer />
          {
            showGoToTop && (
              <button className="btn-gototop" onClick={handleGoToTop}>
                <i className="btn-gototop-icon fas fa-arrow-up"></i>
              </button>
            )
          }
        </div>
      </div>
    </Router>
  );
}

export default App;
