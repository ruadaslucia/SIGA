import '../addStudentButton/addStudentButton.scss';

function AddStudentButton() {
  function handleAddStudent() {
    console.log('Este botón abre un formulario para añadir otro alumno');
  }
  return (
    <div className="buttonContainer">
      <button
        className="addStudentButton"
        onClick={handleAddStudent}
        title="Añadir alumno"
      >
        +
      </button>
    </div>
  );
}

export default AddStudentButton;
