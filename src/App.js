import './App.css';
import Navbar from './components/navigation/Navbar';
import Content from './components/Content';

function App() {

  // TO-DO
  // add content change logic (probs. using Router)
  // add result detail product route
  // implement global context for search logic and api requests or response handle
  
  // handle responsiveness

  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
