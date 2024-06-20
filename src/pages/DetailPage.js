import React from 'react';
import books from "../books.json";
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
function DetailPage() {
  const params = useParams();
  const bookID = params.id;
  const book = books.find((book) => book.id === bookID);

  if (!book) {
    return (
      <Typography variant="h3" marginTop={3}>
        No book found
      </Typography>
    );
  }

  return (
    <Container sx={{ width: 900}} >
      <Typography variant="h3" marginTop={3} color="success.contrastText">
        {book.description}
      </Typography>

      {/* <Box marginTop={3} sx={{display: "flex"}}>

      </Box> */}
    </Container>
  )
}

export default DetailPage;
