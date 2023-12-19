import React from 'react';
import { Stack, Typography } from '@mui/material';
import { CgGym } from "react-icons/cg";


const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #0E8388', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <CgGym style={{ width: '40px', height: '40px', color:'#0E8388' }} />
    
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#2E4F4F" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
