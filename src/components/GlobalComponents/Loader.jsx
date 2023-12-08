import * as React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import CircularProgress, {circularProgressClasses,} from '@mui/material/CircularProgress';

const Container=styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-direction: column;
`;

function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 700 : 800],
        }}
        size={70}
        thickness={5}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={70}
        thickness={5}
        {...props}
      />
    </Box>
  );
}

export default function Loader() {
  return (
    <Container>
      <FacebookCircularProgress />
    </Container>
  );
}