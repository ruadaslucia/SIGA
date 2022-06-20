import './App.css';
import Main from './components/main/main';
import Landing from './components/landing/landing';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
