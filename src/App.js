import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Main from './components/main/Main';
import Landing from './components/landing/Landing';
import Classes from './components/classes/Classes';
import Students from './components/students/Students';
import Profile from './components/profile/Profile';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />}>
          <Route path="/main/profile" element={<Profile />} />
          <Route path="classes" element={<Classes />} />
          <Route path="students" element={<Students />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
