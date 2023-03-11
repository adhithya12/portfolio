import './App.css';
import Home from './Adhi_Portfolio/js/Home'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Adhi_Portfolio/js/Sidebar';
import About from './Adhi_Portfolio/js/About';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Routes>
      <Route path="/" exact element={<><Sidebar/><Home/></>} />
      <Route path="/about" exact element={<><Sidebar/><About/></>} />
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
