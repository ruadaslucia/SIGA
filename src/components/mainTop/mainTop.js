import './mainTop.scss';
import UserImg from '../../images/studentIcon.png';

function MainTop() {
  return (
    <div className="mainTop">
      <h2 className="mainTop__mainTitle">esto es el título</h2>
      <img className="mainTop__userImage" src={UserImg} alt="logo" />
    </div>
  );
}

export default MainTop;
