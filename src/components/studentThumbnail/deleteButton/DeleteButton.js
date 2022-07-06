import './deleteButton.scss';

function DeleteButton() {
  function handleDeleteButton() {
    console.log('Este botón elimina este alumno');
  }
  return (
    <div>
      <button className="deleteButton" onClick={handleDeleteButton}>
        cancel
      </button>
    </div>
  );
}
export default DeleteButton;
