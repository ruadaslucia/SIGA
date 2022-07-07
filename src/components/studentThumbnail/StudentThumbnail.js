// import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './studentThumbnail.scss';
import studentAvatar from '../../images/avatarAlumno.jpg';
import Button from '@mui/material/Button';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
// import { List } from '@mui/material';

function StudentThumbnail() {
  function handleStudentDetail() {
    console.log('Este botón abre el detalle del alumno');
  }
  function handleDeleteButton() {
    console.log('Este botón elimina este alumno');
  }
  return (
    <div>
      <Card className="card">
        <CardMedia component="img" image={studentAvatar} alt="Student Avatar" />
        <CardHeader className="cardStudentName" title="Full Name" />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Text with another information of the student.
          </Typography>
        </CardContent>

        <div className="cardLink">
          <Button
            title="Student info"
            onClick={handleDeleteButton}
            endIcon={<PersonRoundedIcon />}
          ></Button>
          <Button
            title="Delete student"
            onClick={handleStudentDetail}
            endIcon={<DeleteRoundedIcon />}
          ></Button>
        </div>
      </Card>
    </div>
  );
}
export default StudentThumbnail;
