import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Proposal from './components/Proposal';
import FloatingHearts from './components/FloatingHearts';
import AudioPlayer from './components/AudioPlayer';
import './App.css';

function App() {
  return (
    <>
      <FloatingHearts />
      <AudioPlayer />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surprise" element={<Proposal />} />
      </Routes>
    </>
  );
}

export default App;
