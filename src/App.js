import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </>
  );
}

export default App;
