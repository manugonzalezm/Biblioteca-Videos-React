import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import DisplayGridContainer from './components/DisplayGridContainer';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route exact path="/" element={<DisplayGridContainer />} />
        <Route exact path="/search/:search" element={<DisplayGridContainer />} />
      </Routes>
    </>
  );
}

export default App;
