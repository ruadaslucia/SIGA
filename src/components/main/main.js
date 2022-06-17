import './main.css';
import MainLeft from '../mainLeft/mainLeft';
import MainRight from '../mainRight/mainRight';
import UserImg from '../../images/userImg.png';

function Main() {
  return (
    <main className="main">
      <MainLeft />
      <MainRight />
      <div className="titleContainer">
        <div className="userImageContainer">
          <img className="userImage" src={UserImg} alt="logo" />{' '}
        </div>
        <h2 className="mainTitle">esto es el título</h2>
      </div>
    </main>
  );
}

export default Main;
