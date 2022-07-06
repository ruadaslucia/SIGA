// import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './studentThumbnail.scss';
import studentAvatar from '../../images/avatarAlumno.jpg';

import CancelIcon from '@mui/icons-material/Cancel';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

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
        <CardMedia component="img" image={studentAvatar} alt="Student Photo" />
        <CardHeader className="cardStudentName" title="Full Name" />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Text with another information of the student.
          </Typography>
        </CardContent>
        <div className="cardLink">
          <button
            className="studenThumbNailButton"
            onClick={handleStudentDetail}
            variant="contained"
            endIcon={<CancelIcon />}
          ></button>
          <button
            className="studenThumbNailButton"
            onClick={handleDeleteButton}
            endIcon={<PersonRoundedIcon />}
          ></button>
        </div>
      </Card>
    </div>
  );
}
export default StudentThumbnail;
