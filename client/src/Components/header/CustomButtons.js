import {Box , Button,Typography, styled, Badge} from '@mui/material'
import {ShoppingCart} from '@mui/icons-material'
import {ExpandMore} from '@mui/icons-material';
import LoginDialog from '../Login/LoginDialog'
import { useState, useContext } from 'react';
import { DataContext } from '../../Context/DataProvider';
import Profile from './Profile';
import {useSelector} from 'react-redux'


const Wrapper = styled(Box)(({theme})=>({
    
    display: 'flex',
    alignItems: 'center',
   ' & > * ' : {
        marginLeft: '25px',
    },
    [theme.breakpoints.down('md')]:{
        display: 'block',
        width: '150px'
    }
}))
    

const LoginButton = styled(Button)`
    color: #2480f0;
    background: #ffffff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600px;
    height: 26px;
`

const CustomButtons = () =>{

    const [open,setOpen] = useState(false);
    const {account, setAccount} = useContext(DataContext);

    const openDialog = () =>{
        setOpen(true)
    }
    const {cartItems} = useSelector(state => state.cart) 

    return(
        <>
            <Wrapper>
               {
                    account? <Profile account={account} setAccount={setAccount}/>:
                    <LoginButton variant='contained' onClick={()=>openDialog()}> Login </LoginButton>
               } 
               <Typography style={{marginLeft: '9px'}}>Become a Seller</Typography>
               <Box style={{display:'flex'}}>
                <Typography>More</Typography>
                <ExpandMore/> 
               </Box>
               <Box style={{display:'flex'}}>
                <Badge badgeContent={cartItems?.length} color='primary'>
                    <ShoppingCart/>
                </Badge>
                <Typography>Cart</Typography>
               </Box>
               <LoginDialog open={open} setOpen = {setOpen}/>
            </Wrapper>
            
        </>
    )
}

export default CustomButtons