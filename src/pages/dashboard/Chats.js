import { Box, IconButton, Stack, Typography, InputBase, Button, Divider, Avatar, Badge } from
  '@mui/material'
import { ArchiveBox, CircleDashed, MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { faker } from '@faker-js/faker';
import { ChatList } from '../../data';
import ChatElement from '../../components/ChatElement';
import StyledBadge from '../../components/StyledBadge';

const Chats = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      position: "relative", width: 320,
      backgroundColor: "#F1FAFF",
      boxShadow: '0px 0px 2px rgba(0,0,0,0.25)'
    }}>
      <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
        <Stack direction="row" alignItems='center' >
          <IconButton>
            <CircleDashed />
          </IconButton>
          <Typography variant='h5'>
            QuickChat
          </Typography>
        </Stack>
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

        {/* <Stack direction='row' alignItems='center' justifyContent='space-evenly'>
          <Stack spacing={1} alignItems='center' >
            <IconButton>
              <Phone />
            </IconButton>
            <Typography variant='overline'>Voice</Typography>
          </Stack>
          <Stack spacing={1} alignItems='center' >
            <IconButton>
              <VideoCamera />
            </IconButton>
            <Typography variant='overline'>Video</Typography>
          </Stack>
        </Stack> */}

        <Stack spacing={1}>
          <Stack direction='row' alignItems='center' spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>
              Archive
            </Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack className='scrollbar' spacing={2} direction='column' sx={{ flexGrow: 1, overflow: 'scroll', height: '100%' }}>

          <Stack spacing={2.4}>
            <Typography variant='subtitle2' sx={{ color: "#676767" }}>
              Pinned
            </Typography>
            {ChatList.filter((el) => el.pinned).map((el) => {
              return <ChatElement  {...el} />
            })}

          </Stack>

          <Stack spacing={2.4}>
            <Typography variant='subtitle2' sx={{ color: "#676767" }}>
              All Chats
            </Typography>
            {ChatList.filter((el) => !el.pinned).map((el) => {
              return <ChatElement {...el} />
            })}

          </Stack>

        </Stack>
      </Stack>

    </Box>
  )
}

export default Chats