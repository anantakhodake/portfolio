
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home'></Route>
        </Routes>      
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;
