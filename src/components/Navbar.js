import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo-2.png';

const Navbar = () => (
  <Stack  display="flex" direction="row" justifyContent="center" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '150px', height: '150px', marginBottom: "-50px" }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#2C3333', borderBottom: '3px solid #2E4F4F'}}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#2C3333' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;