import './landing.scss';
import { Link } from 'react-router-dom';
import logoSiga from '../../images/logoSiga.png';

function Landing() {
  const handleClickStart = () => {};
  return (
    <>
      <div className="mainContent">
        <img className="logoLanding" src={logoSiga} alt="logo de SIGA" />
        <div className="landingForm">
          <label className="titleInput" htmlFor="name">
            USERNAME
          </label>
          <input
            className="nameInput"
            id="name"
            type="text"
            name="name"
            placeholder=""
          />
        </div>
        <div className="buttonBox">
          <button className="button" onClick={handleClickStart}>
            <Link classNameName="button__link" to="/main">
              Comenzar
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Landing;
