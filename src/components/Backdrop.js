import React from 'react';
import '../assets/styles/style.css';

const Backdrop = ({ open, setOpen }) => {
    return (
        <div
            className='backdrop'
            onClick={() => setOpen(!open)}
        />
    )
}

export default Backdrop
