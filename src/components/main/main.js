import './main.scss';
import MainTop from '../mainTop/mainTop';
import SideBar from '../sideBar/sideBar';
import MainRight from '../mainRight/mainRight';

function Main() {
  return (
    <main className="main">
      <MainTop />
      <SideBar />
      <MainRight />
      <div className="titleContainer"></div>
    </main>
  );
}

export default Main;
