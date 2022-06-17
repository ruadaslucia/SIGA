import './mainTop.css';
import UserImg from '../../images/studentIcon.png';

function MainTop() {
  return (
    <div className="mainTop">
      <h2 className="mainTitle">esto es el título</h2>
      <label htmlFor="userName"></label>
      <img className="userImage" src={UserImg} alt="logo" />{' '}
    </div>
  );
}

export default MainTop;
