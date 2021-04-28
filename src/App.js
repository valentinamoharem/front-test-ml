import React from 'react';
import './App.css';
import Navbar from './components/navigation/Navbar';
import Content from './components/Content';
import Breadcrumbs from './components/navigation/Breadcrumbs';
import Detail from './components/Detail';
import ContentContext from './contexts/ContentContext';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RouterContent from './components/RouterContent';

function App() {

  // handle responsiveness (using grid css)

  const [search, setSearch] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [history, setHistory] = React.useState(0);

  const contextProps = {
    search: search,
    setSearch,
    results: results,
    setResults,
    history: history,
    setHistory
  }

  return (
    <div className="App">
      <ContentContext.Provider value={contextProps}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar />
            </Route>
            <Route path='/items'>
              <RouterContent />
            </Route>
          </Switch>
        </Router>
      </ContentContext.Provider>
    </div>
  );
}

export default App;
