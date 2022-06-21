import './main.scss';
import SideBar from '../sideBar/mainLeft';
import MainRight from '../mainRight/mainRight';

function Main() {
  return (
    <main className="main">
      <SideBar />
      <MainRight />
      <div className="titleContainer"></div>
    </main>
  );
}

export default Main;
