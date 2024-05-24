import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { CarouselButtons, FlexCenterbox1, FlexStartbox1, MiniCarouselBox } from '../assets/styles/Styles';
import { grey } from '@mui/material/colors';
import arrow1 from '../assets/images/arrow1.png';
import arrow2 from '../assets/images/arrow2.png';
import letter from '../assets/images/Path 32120.png';

const MiniCarousel = () => {
    const [count, setCount] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const minicarousel_items = [
        { id: 1, title: 'Lorem Ipsum Dolor', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { id: 2, title: 'Lorem Ipsum', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
    ]

    useEffect(() => {
        const id = setInterval(() => {
            setCount((count + 1) % minicarousel_items.length)
        }, 5000)

        setIntervalId(id);

        return () => clearInterval(id);
    }, [count, minicarousel_items.length])

    const handleNext = () => {
        clearInterval(intervalId);
        setCount((count + 1) % minicarousel_items.length);
    }

    const handlePrev = () => {
        clearInterval(intervalId);
        setCount(count <= 0 ? minicarousel_items.length - 1 : (count - 1) % minicarousel_items.length);
    }

    return (
        <div className='minicarousel-div'>
            <Grid container>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <FlexCenterbox1>
                        <img src={letter} alt='E' height={350} />
                    </FlexCenterbox1>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <FlexCenterbox1>
                        {minicarousel_items.map((v, i) => {
                            return (
                                <div
                                    key={v.id}
                                    className={count === i ?
                                        "minicarousel-card minicarousel-card-active" :
                                        "minicarousel-card"
                                    }
                                >
                                    <MiniCarouselBox>
                                        <Typography variant='subtitle1' sx={{ color: '#FFFFFF' }}>
                                            {v.title}
                                        </Typography>

                                        <Box sx={{ height: '140px', overflow: 'auto' }}>
                                            <Typography
                                                variant='body1'
                                                sx={{ mt: 2, color: grey[400] }}
                                            >
                                                {v.body}
                                            </Typography>
                                        </Box>

                                        <FlexStartbox1 sx={{ ml: -2, my: 2 }}>
                                            <CarouselButtons onClick={handlePrev}>
                                                <img
                                                    src={arrow1}
                                                    alt=''
                                                    style={{ height: '26px' }}
                                                />
                                            </CarouselButtons>

                                            <CarouselButtons onClick={handleNext}>
                                                <img
                                                    src={arrow2}
                                                    alt=''
                                                    style={{ height: '26px' }}
                                                />
                                            </CarouselButtons>
                                        </FlexStartbox1>
                                    </MiniCarouselBox>
                                </div>
                            )
                        })}
                    </FlexCenterbox1>
                </Grid>
            </Grid>
        </div>
    )
}

export default MiniCarousel
