import React from 'react';
import { Box, Divider, Grid, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FlexBetweenbox1, FlexStartbox1, MaxWidthBox, TabButtons } from '../assets/styles/Styles';
import { grey } from '@mui/material/colors';
import { footer_items } from '../utils/Constants';
import img1 from '../assets/images/Group 4560.png';
import img2 from '../assets/images/Group 4560 - Copy.png';
import img3 from '../assets/images/Group 4560 - Copy (2).png';

const Footer = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <div style={{ background: '#0F206C' }}>
            <MaxWidthBox>
                <Grid container spacing={2}>
                    <Grid item lg={4.5} md={4} sm={12} xs={12}>
                        <Box
                            sx={{
                                p: 1,
                                m: 2,
                                background: '#FFFFFF',
                                color: '#0F206C',
                                width: '170px',
                                textAlign: 'center'
                            }}
                        >
                            <Typography variant='h4' >
                                SPINHEADS
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box
                            sx={{
                                p: 1,
                                m: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: matches ? 'flex-start' : 'center',
                                alignItems: matches ? 'flex-start' : 'center'
                            }}
                        >
                            {footer_items.map((v, i) => {
                                return (
                                    <TabButtons key={i}>
                                        {v.route}
                                    </TabButtons>
                                )
                            })}
                        </Box>
                    </Grid>

                    <Grid item lg={4.5} md={4} sm={6} xs={12}>
                        <Box
                            sx={{
                                p: 1,
                                m: 2,
                                mb: 0,
                                textAlign: matches ? 'right' : 'left',
                                color: '#FFFFFF'
                            }}
                        >
                            <Typography variant='body1'>
                                ADDRESS
                            </Typography>

                            <Typography
                                variant='h6'
                                sx={{ mt: 1.5, mb: 3, color: grey[400] }}
                            >
                                1 Sheikh Mohammed bin Rashid Blvd, Downtown Dubai, Dubai, United Arab Emirates
                            </Typography>

                            <Typography variant='body1'>
                                EMAIL
                            </Typography>

                            <Typography
                                variant='h6'
                                sx={{ mt: 1.5, color: grey[400] }}
                            >
                                contactspinheads@spinheads.com
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item lg={12} xs={12}>
                        <Box
                            sx={{
                                p: 1,
                                mx: 2,
                                my: 0,
                                textAlign: 'left',
                                color: '#FFFFFF'
                            }}
                        >
                            <Typography variant='body1'>
                                FOLLOW US
                            </Typography>

                            <FlexStartbox1 sx={{ ml: -1 }}>
                                <IconButton>
                                    <img
                                        src={img1}
                                        alt='ln'
                                        height={20}
                                    />
                                </IconButton>

                                <IconButton>
                                    <img
                                        src={img2}
                                        alt='im'
                                        height={20}
                                    />
                                </IconButton>

                                <IconButton>
                                    <img
                                        src={img3}
                                        alt='fb'
                                        height={20}
                                    />
                                </IconButton>
                            </FlexStartbox1>

                            <Divider
                                sx={{ background: '#FFFFFF' }}
                            />

                            <FlexBetweenbox1 sx={{ mt: 2 }}>
                                <Typography variant='caption'>
                                    SPINHEADS by Gopal Gawade
                                </Typography>

                                <Typography variant='caption'>
                                    Copyright © 2024 Spinheads. All Rights Reserved.
                                </Typography>
                            </FlexBetweenbox1>
                        </Box>
                    </Grid>
                </Grid>
            </MaxWidthBox>
        </div>
    )
}

export default Footer
