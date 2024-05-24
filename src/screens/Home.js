import React from 'react';
import Header from '../components/Header';
import { Box, Grid, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { FlexCenterbox1, TabButtons } from '../assets/styles/Styles';
import Footer from '../components/Footer';
import Accordion from '../components/Accordion';
import Carousel from '../components/Carousel';
import MiniCarousel from '../components/MiniCarousel';
import playbtn from '../assets/images/play-circle-svgrepo-com.png';
import '../assets/styles/style.css';

const Home = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <div>
            {/*Header*/}
            <Header />
            <Toolbar />

            {/*Carousel*/}
            <Carousel />

            <Box sx={{ mt: 10 }}>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={4.5} sm={12} xs={12}>
                        <Box sx={{ p: 7, textAlign: 'left' }}>
                            <Typography variant='subtitle1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>

                            <Typography variant='body1' sx={{ mt: 2, color: grey[600] }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item lg={6} md={7.5} sm={12} xs={12}>
                        <Box sx={{ p: 7, textAlign: 'left', height: '400px' }}>
                            <div className='iframediv'>
                                <TabButtons>
                                    <img
                                        src={playbtn}
                                        alt='play'
                                        height={90}
                                    />
                                </TabButtons>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/*Mini Carousel*/}
            <MiniCarousel />
            <br />

            {/*Scrollbar*/}
            <FlexCenterbox1 sx={{ mt: matches ? 6 : 36 }}>
                <div className='scrolltext'>
                    <div className='scrolltext-right-to-left'>
                        <Typography
                            variant={matches ? 'h3' : 'h2'}
                            sx={{ color: '#0F206C' }}
                        >
                            <span className='scrollbluetext'>
                                AMS&nbsp;
                            </span>
                            <span>
                                PROGRAMS&nbsp;
                            </span>
                            <span className='scrollbluetext'>
                                PRO&nbsp;
                            </span>

                            <span className='scrollbluetext'>
                                AMS&nbsp;
                            </span>
                            <span>
                                PROGRAMS&nbsp;
                            </span>
                            <span className='scrollbluetext'>
                                PRO&nbsp;
                            </span>

                            <span className='scrollbluetext'>
                                AMS&nbsp;
                            </span>
                            <span>
                                PROGRAMS&nbsp;
                            </span>
                            <span className='scrollbluetext'>
                                PRO&nbsp;
                            </span>
                        </Typography>
                    </div>
                </div>
            </FlexCenterbox1>

            {/*Accordion*/}
            <Accordion />
            <br />

            <Footer />
        </div>
    )
}

export default Home
