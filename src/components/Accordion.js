import React, { useState } from 'react';
import {
    AccordionBox,
    AccordionBoxContent,
    FlexBetweenbox1,
    FlexCenterbox1,
    FlexStartbox1,
    MaxWidthBox,
    StyledButton1,
    StyledButton2,
    StyledIconButton1,
    StyledIconButton2
} from '../assets/styles/Styles';
import { grey } from '@mui/material/colors';
import { accordion, accordion_items } from '../utils/Constants';
import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import wardrobe from '../assets/images/2.png';
import download from '../assets/images/Group 5297.png';
import '../assets/styles/style.css';

const Accordion = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const [id, setId] = useState(1);

    return (
        <div>
            <MaxWidthBox>
                {accordion.map((v, i) => {
                    return (
                        <Box key={i} onClick={() => setId(v.id)}>
                            <Divider
                                sx={{ background: '#707070', my: 2 }}
                            />

                            <FlexBetweenbox1 sx={{ '&:hover': { cursor: 'pointer' } }}>
                                <Typography variant='subtitle1'>
                                    {i < 10 ? `0${v.id}` : v.id}
                                </Typography>

                                <Typography
                                    variant='subtitle1'
                                    sx={{ color: v.id === id ? '#0075C9' : '#000000' }}
                                >
                                    {v.title}
                                </Typography>
                            </FlexBetweenbox1>

                            {id == v.id ?
                                <div className='accordion'>
                                    <Grid container sx={{ py: 2 }}>
                                        <Grid item lg={5.5} md={6} sm={6} xs={12}>
                                            <AccordionBoxContent
                                                sx={{
                                                    borderTopLeftRadius: '10px',
                                                    borderBottomLeftRadius: matches ? '10px' : '0px',
                                                    borderTopRightRadius: matches ? '0px' : '10px'
                                                }}
                                            >
                                                <Box>
                                                    {accordion_items.map((v, i) => {
                                                        return (
                                                            <FlexStartbox1 key={i} sx={{ mb: 2 }}>
                                                                <StyledIconButton2>
                                                                    <img
                                                                        src={v.image}
                                                                        alt=''
                                                                        height={15}
                                                                    />
                                                                </StyledIconButton2>

                                                                <Typography variant='h6'>
                                                                    {v.name}
                                                                </Typography>
                                                            </FlexStartbox1>
                                                        )
                                                    })}

                                                    <Divider
                                                        sx={{ background: '#FFFFFF' }}
                                                    />

                                                    <Box sx={{ height: '190px', overflow: 'auto' }}>
                                                        <Typography
                                                            variant='body1'
                                                            sx={{ mt: 2, color: grey[400] }}
                                                        >
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                        </Typography>
                                                    </Box>
                                                </Box>

                                                <FlexStartbox1 sx={{ my: 1 }}>
                                                    <StyledButton1>
                                                        KNOW MORE
                                                    </StyledButton1>

                                                    <StyledButton1>
                                                        APPLY NOW
                                                    </StyledButton1>

                                                    <StyledIconButton1>
                                                        <img
                                                            src={download}
                                                            alt=''
                                                            height={30}
                                                        />
                                                    </StyledIconButton1>
                                                </FlexStartbox1>
                                            </AccordionBoxContent>
                                        </Grid>

                                        <Grid item lg={6.5} md={6} sm={6} xs={12}>
                                            <AccordionBox
                                                sx={{
                                                    borderBottomLeftRadius: matches ? '0px' : '10px',
                                                    borderBottomRightRadius: '10px',
                                                    borderTopRightRadius: matches ? '10px' : '0px'
                                                }}>
                                                <img
                                                    src={wardrobe}
                                                    height={matches ? '456px' : '100%'}
                                                    width={'auto'}
                                                />
                                            </AccordionBox>
                                        </Grid>
                                    </Grid>
                                </div> :
                                null
                            }
                        </Box>
                    )
                })}

                <Divider
                    sx={{ background: '#707070', my: 2 }}
                />

                <FlexCenterbox1 sx={{ my: 5 }}>
                    <StyledButton2 sx={{ mr: 1 }}>
                        EXPLORE ALL PROGRAMS
                    </StyledButton2>

                    <StyledButton2 sx={{ ml: 1 }}>
                        ENQUIRE NOW
                    </StyledButton2>
                </FlexCenterbox1>
            </MaxWidthBox>
        </div >
    )
}

export default Accordion
