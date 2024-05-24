import React, { useEffect, useState } from 'react';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { ArrowBtnBox, FlexCenterbox1, GradientCircle, TabButtons } from '../assets/styles/Styles';
import carouselimg from '../assets/images/Mask Group 37.png';
import carouselimg2 from '../assets/images/image.png';
import arrow1 from '../assets/images/arrow1.png';
import arrow2 from '../assets/images/arrow2.png';

const Carousel = () => {
    const [count, setCount] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const items = [
        { id: 1, title: 'Spinheads', subtitle: 'Tech', image: carouselimg },
        { id: 2, title: 'Spinheads', subtitle: 'Digital', image: carouselimg2 }
    ]

    useEffect(() => {
        const id = setInterval(() => {
            setCount((count + 1) % items.length)
        }, 5000)

        setIntervalId(id);

        return () => clearInterval(id);
    }, [count, items.length])

    const handleNext = () => {
        clearInterval(intervalId);
        setCount((count + 1) % items.length);
    }

    const handlePrev = () => {
        clearInterval(intervalId);
        setCount(count <= 0 ? items.length - 1 : (count - 1) % items.length);
    }

    return (
        <div>
            <div className='carousel'>
                <div className="carousel-wrapper">
                    {items.map((v, i) => {
                        return (
                            <div
                                key={v.id}
                                className={count === i ?
                                    "carousel-card carousel-card-active" :
                                    "carousel-card"
                                }
                            >
                                <img className='carouselimg' src={v.image} alt='' />

                                <div className='carousel-content'>
                                    <Typography variant={matches ? 'h1' : 'h2'}>
                                        {v.title},
                                    </Typography>

                                    <Typography variant={matches ? 'h1' : 'h2'}>
                                        {v.title} <span style={{ color: '#00BED6' }}>{v.subtitle}</span>
                                    </Typography>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

            <FlexCenterbox1>
                <ArrowBtnBox>
                    <TabButtons onClick={handlePrev}>
                        <img
                            src={arrow1}
                            alt=''
                            style={{ height: '26px' }}
                        />
                    </TabButtons>

                    <TabButtons onClick={handleNext}>
                        <img
                            src={arrow2}
                            alt=''
                            style={{ height: '26px' }}
                        />
                    </TabButtons>
                </ArrowBtnBox>

                <GradientCircle>
                    <Typography variant='h5'>
                        WE ARE SPINNERS!
                    </Typography>
                </GradientCircle>
            </FlexCenterbox1>
        </div>
    )
}

export default Carousel
