import React from 'react';
import './App.css';
import Navbar from './components/navigation/Navbar';
import Content from './components/Content';
import Breadcrumbs from './components/navigation/Breadcrumbs';
import Detail from './components/Detail';

function App() {

  // TO-DO
  // add content change logic (probs. using Router)
  // add result detail product route
  // implement global context for search logic and api requests or response handle
  
  // handle responsiveness

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:3001/api') 
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Breadcrumbs />
      {/* <Content /> */}
      <p>{!data ? "Loading..." : data}</p>
      {/* <Detail /> */}
    </div>
  );
}

export default App;
