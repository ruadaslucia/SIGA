import './main.scss';
import SideBar from '../sideBar/sidebar';
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
