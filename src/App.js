import './App.css';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import { AnimatePresence } from 'framer-motion';

function App() {
  let location = useLocation();
  return (

    <div className="app">

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </AnimatePresence>

    </div>
  );
}

export default App;
