import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import DisplayGridContainer from './components/DisplayGridContainer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DisplayGridContainer />} />
        <Route path="/search/:search" element={<DisplayGridContainer />} />
      </Routes>
    </>
  );
}

export default App;
