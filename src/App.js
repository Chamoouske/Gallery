import './App.css';
import './api/firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './controller/routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
