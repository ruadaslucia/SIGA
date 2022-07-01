import './landing.scss';
import { Link } from 'react-router-dom';
//import logoSiga from '../../images/logoSiga.png';

function Landing() {
  const handleClickStart = () => {};
  return (
    <>
      <div className="mainContent">
        {/* <img className="logoLanding" src={logoSiga} alt="logo de SIGA" /> */}
        <p className="landingParagraph">Sistema de Gestión de Alumnos</p>
        <div className="landingForm">
          <label className="titleInput" htmlFor="name">
            NOMBRE DE USUARIO
          </label>

          <input
            className="nameInput"
            id="name"
            type="text"
            name="name"
            placeholder="Pepito"
          />
        </div>
        <div className="buttonBox">
          <button className="button" onClick={handleClickStart}>
            <Link className="button__link" to="/main/profile">
              Comenzar
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Landing;
