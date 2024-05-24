import styled from "@emotion/styled";
import { Box, Button, IconButton } from "@mui/material";

export const TabButtons = styled(Button)({
    background: 'transparent',
    textTransform: 'none',
    fontSize: '14px',
    color: '#FFFFFF',
    padding: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    '&:hover': {
        cursor: 'pointer'
    }
})

export const CarouselButtons = styled(Button)({
    background: 'transparent',
    textTransform: 'none',
    fontSize: '14px',
    color: '#FFFFFF',
    '&:hover': {
        cursor: 'pointer'
    }
})

export const FlexCenterbox1 = styled(Box)({
    display: 'flex',
    justifyContent: 'center'
})

export const FlexStartbox1 = styled(Box)({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
})

export const FlexBetweenbox1 = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

export const ArrowBtnBox = styled(Box)({
    display: 'flex',
    justifyContent: 'flex-end',
    width: '90%',
    marginTop: '-130px',
    position: 'absolute'
})

export const GradientCircle = styled(Box)({
    height: '180px',
    width: '180px',
    background: 'linear-gradient(180deg, rgba(0,190,214,1) 0%, rgba(15,32,108,1) 100%)',
    position: 'absolute',
    marginTop: '-100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '50%',
    color: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

export const LetterBox = styled(Box)({
    padding: '56px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
})

export const MiniCarouselBox = styled(Box)({
    padding: '56px',
    textAlign: 'left',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
})

export const StyledButton1 = styled(Button)({
    background: '#FFFFFF',
    textTransform: 'none',
    fontSize: '14px',
    color: '#0F206C',
    padding: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    marginRight: '12px',
    '&:hover': {
        cursor: 'pointer',
        background: '#FFFFFF',
        color: '#0F206C',
    }
})

export const StyledButton2 = styled(Button)({
    background: '#0F206C',
    textTransform: 'none',
    fontSize: '14px',
    color: '#FFFFFF',
    padding: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    '&:hover': {
        cursor: 'pointer',
        background: '#0F206C',
        color: '#FFFFFF',
    }
})

export const StyledButton3 = styled(Button)({
    background: '#00BED6',
    textTransform: 'none',
    fontSize: '14px',
    color: '#FFFFFF',
    padding: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    '&:hover': {
        cursor: 'pointer',
        background: '#00BED6',
        color: '#FFFFFF',
    }
})


export const StyledIconButton1 = styled(IconButton)({
    background: '#FFFFFF',
    textTransform: 'none',
    color: '#0F206C',
    padding: '0px',
    '&:hover': {
        cursor: 'pointer',
        background: '#FFFFFF',
        color: '#0F206C',
    }
})

export const StyledIconButton2 = styled(IconButton)({
    marginRight: '12px',
    height: '26px',
    width: '26px',
    background: '#FFFFFF',
    '&:hover': {
        background: '#FFFFFF'
    }
})

export const MaxWidthBox = styled(Box)({
    maxWidth: '1400px',
    padding: '24px',
    marginLeft: 'auto',
    marginRight: 'auto'
})

export const AccordionBox = styled(Box)({
    height: '100%',
    textAlign: 'start',
    background: '#0F206C',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexDirection: 'column'
})

export const AccordionBoxContent = styled(Box)({
    padding: '24px',
    height: '409px',
    textAlign: 'start',
    background: '#0F206C',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexDirection: 'column'
})
