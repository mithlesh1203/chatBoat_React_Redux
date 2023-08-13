import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react';
import {  X } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { ToggleSidebar } from '../redux/slices/app';
import { faker } from '@faker-js/faker';
import '../css/global.css';


const Contact = () => {
  // const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: 320, height: '100vh' }}>
      <Stack sx={{ height: '100%' }}>
        {/* Header */}
        <Box sx={{
          boxShadow: '0px 0px 2px rgba(0.25)',
          width: '100%',
          backgroundColor: '#F8FAFF'
        }}>
          <Stack sx={{ height: '100%', p: 2 }} direction='row' alignItems='center'
            justifyContent='space-between' spacing={3}>
            <Typography variant='subtitle2'>Contact Info</Typography>
            <IconButton onClick={() => {
              dispatch(ToggleSidebar());
            }}>
              <X />
            </IconButton>
          </Stack>
        </Box>
        {/* Body */}

        <Stack className='scrollbar' sx={{ flexGrow: 1, overflow: 'scroll', height: '100%' }}
          spacing={3}>
          <Box sx={{
            position: "relative", width: 300,
            backgroundColor: "#F3FAFF",
            boxShadow: '0px 0px 2px rgba(0,0,0,0.25)'
          }}>
            <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
              <Box sx={{
                width: "100%",
                borderRadius: 1,
                backgroundColor: "#fff"
              }}
                p={2}>
                <Stack alignItems={'center'} spacing={2}>
                  <Avatar src={faker.image.avatar()} alt={faker.name.firstName} sx={{ height: 100, width: 100 }} />
                  <Stack spacing={0.5}>
                    <Typography variant='article' fontWeight={600}>
                      {faker.name.fullName()}
                    </Typography>
                    <Typography variant='article' fontWeight={500}>
                      {'+94 713725452'}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
              <Box sx={{
                width: "100%",
                borderRadius: 1,
                backgroundColor: "#fff"
              }}
                p={2}>
                <Stack alignItems={'center'} spacing={2}>
                  <Avatar src={faker.image.avatar()} alt={faker.name.firstName} sx={{ height: 100, width: 100 }} />
                  <Stack spacing={0.5}>
                    <Typography variant='article' fontWeight={600}>
                      {faker.name.fullName()}
                    </Typography>
                    <Typography variant='article' fontWeight={500}>
                      {'+94 713725452'}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
              <Box sx={{
                width: "100%",
                borderRadius: 1,
                backgroundColor: "#fff"
              }}
                p={2}>
                <Stack alignItems={'center'} spacing={2}>
                  <Avatar src={faker.image.avatar()} alt={faker.name.firstName} sx={{ height: 100, width: 100 }} />
                  <Stack spacing={0.5}>
                    <Typography variant='article' fontWeight={600}>
                      {faker.name.fullName()}
                    </Typography>
                    <Typography variant='article' fontWeight={500}>
                      {'+94 713725452'}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Contact