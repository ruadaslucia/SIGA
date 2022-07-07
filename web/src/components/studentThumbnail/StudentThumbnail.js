// import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './studentThumbnail.scss';
import studentAvatar from '../../images/avatarAlumno.jpg';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { CardActions, IconButton } from '@mui/material';
// import { List } from '@mui/material';

function StudentThumbnail() {
  function handleStudentDetail() {
    console.log('Este botón abre el detalle del alumno');
  }
  function handleDeleteButton() {
    console.log('Este botón elimina este alumno');
  }
  return (
    <Card className="card">
      <CardMedia component="img" image={studentAvatar} alt="Student Avatar" />
      <CardHeader className="cardStudentName" title="Full Name" />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Text with another information of the student.
        </Typography>
      </CardContent>

      <CardActions disableSpacing className="studentThumbnailCardActions">
        <IconButton
          className="iconButton"
          title="Student info"
          onClick={handleDeleteButton}
          size="large"
        >
          <PersonRoundedIcon font-size="inherit" />
        </IconButton>
        <IconButton
          className="iconButton"
          title="Delete student"
          onClick={handleStudentDetail}
          size="large"
        >
          <DeleteRoundedIcon font-size="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
export default StudentThumbnail;
