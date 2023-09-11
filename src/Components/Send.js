import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
  
 
        <Card sx={{ minWidth: 275, borderRadius: '20px', margin:'10px' , backgroundColor:'grey'}}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="body2">
              well-meaning and kindly.
              <br />
            </Typography>
          </CardContent>
        </Card>  
  );
}
