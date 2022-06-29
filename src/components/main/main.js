import './main.scss';
import SideBar from '../sideBar/sidebar';
import { Route, Routes } from 'react-router-dom';
import Profile from '../profile/Profile';
import Classes from '../classes/Classes';
import Students from '../students/Students';

function Main() {
  return (
    <main className="main">
      <SideBar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </main>
  );
}

export default Main;
