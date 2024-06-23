import React, { useState } from 'react'
import books from "../books.json"
import Grid from '@mui/material/Grid';
import BookCard from '../components/BookCard';
import { Container } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSearchParams } from "react-router-dom";




export default function HomePage() {  
  const [page, setPage] = useState(1);

  let [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search");
  
  

  let a = (page-1) * 5;
  let b = (page) * 5;
  const filteredBooks = books.filter((book) => book.title.includes(query));
  // if(page === 2) {
  //   a = a + 5;
  //   b = b + 5;
  // } else if (page === 3) {
  //   a = a + 10;
  //   b = b + 15;
  // } 

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
             justifyContent="space-start"
             alignItems="center"
             height="100%"
             padding="5px"
             >
          {filteredBooks.slice(a, b).map((book) => (
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
          color='pagination'
          onChange={(e, page) => {
            setPage(page);
          }}
          ></Pagination>
      </Stack>
    </Container> 
  )
}


