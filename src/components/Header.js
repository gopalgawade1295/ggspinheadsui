import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { StyledButton3, TabButtons } from '../assets/styles/Styles';
import { items } from '../utils/Constants';
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';

const Header = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(() => {
        if (matches) {
            setOpen(false)
        }
    }, [matches])

    return (
        <div>
            <AppBar elevation={0} sx={{ background: '#0F206C' }}>
                <Toolbar>
                    {!matches ?
                        <MenuIcon onClick={() => setOpen(!open)} /> :
                        null
                    }

                    <Typography variant='h4' sx={{ p: 2 }}>
                        SPINHEADS
                    </Typography>


                    {matches ?
                        <>
                            {items.map((v, i) => {
                                return (
                                    <TabButtons
                                        key={i}
                                        sx={{ ml: v.route.includes('About') ? 'auto' : 0 }}
                                    >
                                        {v.route}
                                    </TabButtons>
                                )
                            })}

                            <StyledButton3>
                                SPINNERS
                            </StyledButton3>
                        </> :
                        null
                    }
                </Toolbar>
            </AppBar>

            {!matches ?
                <>
                    <SideDrawer open={open} />

                    {open &&
                        <Backdrop
                            open={open}
                            setOpen={setOpen}
                        />
                    }
                </> :
                null
            }
        </div>
    )
}

export default Header
