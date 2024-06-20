import React from 'react'
import books from "../books.json"
import Grid from '@mui/material/Grid';
import BookCard from '../components/BookCard';
import { Container } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export default function HomePage() {
  return (   
    <Container>
      <Stack spacing={2}
       sx={{marginTop: "15px", marginBottom: "15px"}}
       display="flex"
       justifyContent="space-between"
       alignItems="center"      
        
       >
         <Grid container spacing={2} mt={2} marginBottom={2}
             display="flex"
             justifyContent="space-between"
             alignItems="center"
             height="100%"
             padding="5px"
             >
          {books.slice(0, 14).map((book) => (
            <Grid item xs={12} md={4} lg={3}>          
              <BookCard
                key={book.id}
                title={book.title}
                book={book}
              />           
            </Grid>          
          ))}
        </Grid>
        <Pagination
         count={3}
          variant="outlined"
          shape="rounded"          
          size="medium"       
          />
      </Stack>
    </Container> 
  )
}


