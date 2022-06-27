import './main.scss';
import SideBar from '../sideBar/sidebar';
import Card from '../card/card';

function Main() {
  return (
    <main className="main">
      <SideBar />
      <Card />
      <div className="titleContainer"></div>
    </main>
  );
}

export default Main;
