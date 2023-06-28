import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid } from '@mui/material';
import Collage from './Collage';
import '../app/globals.scss'


const YourComponent = () => {
  const isMobile = useMediaQuery('(max-width: 600px)'); // Adjust the breakpoint as needed

  return (
    <Grid
      item
      className="parentResource"
      sx={{
        p: 10,
        border: 3,
        borderColor: '#00B4D8',
        borderRadius: 10,
        borderTopLeftRadius: 1,
        borderBottomRightRadius: 25,
        borderBottom: 12, 
      }}
    >
      <Grid
        direction={isMobile ? 'column' : 'row'}
        container
        item
        justifyContent="space-between"
        alignItems="center"
        justifyItems="center"
      >
        <h1 className='blockTitle'>Resources</h1>
        <Grid item xs={isMobile ? 4 : 8}>
          <div className="example-container">
            <Collage />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default YourComponent;
