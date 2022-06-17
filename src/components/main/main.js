import './main.scss';
import MainTop from '../mainTop/mainTop';
import MainLeft from '../mainLeft/mainLeft';
import MainRight from '../mainRight/mainRight';

function Main() {
  return (
    <main className="main">
      <MainTop />
      <MainLeft />
      <MainRight />
      <div className="titleContainer"></div>
    </main>
  );
}

export default Main;
