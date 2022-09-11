import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route ,Routes } from "react-router-dom";

import Home from './pages/Home';
import Form from './pages/form/Form';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/form" element={<Form />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
