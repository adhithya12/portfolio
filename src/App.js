import './App.css';
import Home from './Adhi_Portfolio/js/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Adhi_Portfolio/js/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<><Sidebar/><Home/></>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
