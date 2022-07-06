import '../students/students.scss';
import StudentThumbnail from '../studentThumbnail/StudentThumbnail';
import Search from './search/Search';
import AddStudentButton from './addStudentButton/AddStudentButton';
function Students() {
  return (
    <div className="students">
      <h1 className="students__title">alumnos</h1>
      <div className="students__searchBar">
        <Search />
      </div>
      <div className="students__studentsCard">
        <StudentThumbnail />
        <StudentThumbnail />
        <StudentThumbnail />
        <StudentThumbnail />
        <StudentThumbnail />
        <AddStudentButton />
      </div>
    </div>
  );
}

export default Students;
