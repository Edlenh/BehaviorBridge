import * as React from 'react';
import Image from 'next/image'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import bluepuzzle from "../../public/bluepuzzle.webp"
import Box from '@mui/material/Box';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Box sx={{ width: 128, height: 128 }}>
          <Image
            style={{
                maxWidth: "700px",
                width: "100%",
                height: "auto",
                margin: "auto",
            }}
            src={bluepuzzle}
            alt= "blue puzzles by bao sabrina on unsplash"
            
            className="pointer"/>
          </Box>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Learn Behavioral
              </Typography>
              <Typography variant="body2" gutterBottom>
              Relevant information for parents
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Click Here
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}