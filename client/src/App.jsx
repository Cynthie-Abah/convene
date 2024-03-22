import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route
                exact
                path="/"
                element={<Home />}
            ></Route>
              <Route
                exact
                path="/login"
                element={<Login />}
            ></Route>
               <Route
                exact
                path="/signup"
                element={<Register />}
            ></Route>
        </Routes>
      </div>
  </Router>
  );
}

export default App;
