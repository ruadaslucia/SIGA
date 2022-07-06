import './studentDetail.scss';

function StudentDetail() {
  function handleStudentDetail() {
    console.log('Este botón abre el detalle del alumno');
  }
  return (
    <div>
      <button className="studentDetail" onClick={handleStudentDetail}>
        acount box
      </button>
    </div>
  );
}
export default StudentDetail;
