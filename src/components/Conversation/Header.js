import { Avatar, Box, Typography, IconButton, Divider, Stack, } from '@mui/material'
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react'
import React from 'react';
// import { useTheme } from "@mui/material/styles";
import { faker } from '@faker-js/faker';
import StyledBadge from '../StyledBadge';
import { ToggleSidebar } from '../../redux/slices/app';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    // const theme = useTheme();
    return (
        <Box p={1.5} sx={{ width: '100%', backgroundColor: '#F8FAFF', boxShadow: '0px 0px 2px rgba(0,0,0,0.25)' }}>
            <Stack alignItems={'center'} direction='row' justifyContent={'space-between'}
                sx={{ width: '100%', height: '100%' }}>
                <Stack onClick={() => {
                    dispatch(ToggleSidebar());
                }} direction={'row'} spacing={2}>
                    <Box>
                        <StyledBadge overlap="circular"
                            anchorOrigin={{ // position
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            variant="dot">
                            <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
                        </StyledBadge>

                    </Box>
                    <Stack spacing={0.2}>
                        <Typography variant='subtitle2'>
                            {faker.name.fullName()}
                        </Typography>
                        <Typography variant='caption'>
                            Online
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction='row' alignItems='center' spacing={3}>
                    <IconButton>
                        <VideoCamera />
                    </IconButton>
                    <IconButton>
                        <Phone />
                    </IconButton>
                    <IconButton>
                        <MagnifyingGlass />
                    </IconButton>
                    <Divider orientation='vertical' flexItem />
                    <IconButton>
                        <CaretDown />
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Header