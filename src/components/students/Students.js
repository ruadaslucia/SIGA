import '../students/students.scss';
import Card from '../card/card';
import Search from './search/Search';
function Students() {
  return (
    <div className="students">
      <h1 className="students__title">alumnos</h1>
      <div className="students__searchBar">
        <Search />
      </div>
      <div className="students__studentCard">
        <Card />
      </div>
    </div>
  );
}

export default Students;
