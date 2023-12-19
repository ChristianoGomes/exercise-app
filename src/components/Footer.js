import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-2.png';
import {FaReact} from 'react-icons/fa';
import {IoLogoCss3} from 'react-icons/io';
import { RiJavascriptFill } from "react-icons/ri";

const Footer = () => (
  <Box mt="80px" bgcolor="#2E4F4F" width="100%">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '150px' }} />
    </Stack>
    <Typography variant="h5"  sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made by Christiano Gomes <br /> <FaReact style={{color:'white',}} /> 
      <IoLogoCss3  style={{color:'white'}} /><RiJavascriptFill  style={{color:'white'}}/> </Typography>
  </Box>
);

export default Footer;