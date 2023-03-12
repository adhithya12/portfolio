import './App.css';
import Home from './Adhi_Portfolio/js/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Adhi_Portfolio/js/Sidebar';
import About from './Adhi_Portfolio/js/About';
import ErrorPage from './Adhi_Portfolio/js/ErrorPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/portfolio" exact element={<><Sidebar/><Home/></>} />
      <Route path="/portfolio/about" exact element={<><Sidebar/><About/></>} />
      <Route path="*" exact element={<><Sidebar/><ErrorPage/></>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
