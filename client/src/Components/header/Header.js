import { useState } from 'react'
import {AppBar, Box, Toolbar, styled, Typography, IconButton, Drawer} from '@mui/material'
import Search from './Search'
import CustomButtons from './CustomButtons'
import {Link} from 'react-router-dom'
import {Menu} from '@mui/icons-material';

const StyledHeader = styled(AppBar)(({ theme }) => ({
    background: '#2480f0',
    height: '55px',
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    }
  }));
  
const StyleLogo = styled(Link)`
    margin-left: 150px;
    line-height:0;
    font-style: Italic;
    text-decoration: none;
    color: inherit
`
const Component = styled(Typography)`
    font-style: Italic
`

const CustomButtonsWrapper = styled(Box)(({theme})=>({
    marginLeft: '15px',
    [theme.breakpoints.down('md')]:{
        display: 'none'
    }
}))

const MenuButton = styled(IconButton)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))

const Header = () =>{

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleOpen = () =>{
        setOpen(true);
    }
    const handleClose = () =>{
        setOpen(false);
    }

    
    return(
        <>
            <StyledHeader className='Header'>
                <Toolbar style={{minHeight:'55px'}}>
                    <MenuButton color='inherit' onClick={handleOpen}>
                        <Menu/>
                    </MenuButton>
                    <Drawer open={open} onClose={handleClose} style={{width: '450px'}}>
                        <CustomButtons/>
                    </Drawer>
                    <StyleLogo to='/'>
                        <img src={logoURL} alt='logo' style={{width: '75px'}} />
                        <Box>
                            <Component style={{fontSize:'12px',fontFamily:'Italic'}}>Explore&nbsp;
                                <Box component='span' style={{color:'#ffe500'}}>plus&nbsp;</Box>
                                <img src={subURL} alt='subLogo' style={{width:'8px'}}/>
                            </Component>
                        </Box>
                    </StyleLogo>
                    <Search />
                    <CustomButtonsWrapper>
                        <CustomButtons />
                    </CustomButtonsWrapper>
                </Toolbar>
            </StyledHeader>
        </>
    )
}

export default Header