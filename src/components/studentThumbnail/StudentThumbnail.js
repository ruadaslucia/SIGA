// import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './studentThumbnail.scss';
import studentAvatar from '../../images/avatarAlumno.jpg';

function StudentThumbnail() {
  return (
    <div>
      <Card className="card">
        <CardMedia component="img" image={studentAvatar} alt="Student Photo" />
        <CardHeader className="cardStudentName" title="Full Name" />

        <CardContent>
          <Typography
            className="cardText"
            variant="body2"
            color="text.secondary"
          >
            Text with another information of the student.
          </Typography>
        </CardContent>
        <div className="cardLink">
          <a href="http://www.marca.com">share</a>
          <a className="cardLinkLearnmore" href="http://www.marca.com">
            learn more
          </a>
        </div>
      </Card>
    </div>
  );
}
export default StudentThumbnail;
