import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Divider from '@mui/material/Divider';
import SkillsPaper from './SkillsPaper';
import { useNavigate } from 'react-router-dom';

export default function BookCard({book}) {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/book/${book.id}`)} 
    sx={{height : 320 , position: 'relative'}}
      
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="success.contrastText">
            {book.title}
          </Typography>
          <Divider />
          <SkillsPaper skills={book.skills} />
          <Typography variant="body2"  color="success.contrastText">
            {book.description}
          </Typography>      
        </CardContent>
      </CardActionArea>
      <CardActions sx={{position: 'absolute', bottom:'10px', left: '70px'}}>
        <Button variant="contained" 
          sx={{ width: "130px", backgroundColor: "#df9e0b" }}>
          LEARN MORE
        </Button>
      </CardActions>
    </Card>
  );

}