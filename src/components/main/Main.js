import './main.scss';
import SideBar from '../sideBar/Sidebar';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <main className="main">
      <SideBar />
      <Outlet />
    </main>
  );
}

export default Main;
