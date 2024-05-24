import React from 'react';
import '../assets/styles/style.css';
import { List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import { items } from '../utils/Constants';

const SideDrawer = ({ open }) => {
    return (
        <div className={open ? 'side-drawer-open' : 'side-drawer'}>
            <Toolbar />

            <List sx={{ mt: 3 }}>
                {items.map((v, i) => {
                    return (
                        <ListItem
                            key={i}
                            disablePadding
                            sx={{ p: 0.75 }}
                        >
                            <ListItemButton>
                                <ListItemText
                                    primary={v.route}
                                    sx={{ color: '#0F206C', fontSize: '24px' }}
                                />
                            </ListItemButton>
                        </ListItem>
                    )
                })}

                <ListItem disablePadding sx={{ p: 0.75 }}>
                    <ListItemButton>
                        <ListItemText
                            primary={'Spinners'}
                            sx={{ color: '#0F206C', fontSize: '24px' }}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    )
}

export default SideDrawer
