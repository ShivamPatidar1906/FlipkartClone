import {Box, styled, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { useState } from 'react'
import { ShoppingCart as Cart, FlashOn as Flash} from '@mui/icons-material'
import {addToCart} from '../../Redux/actions/cartAction'


const LeftContainer = styled(Box)(({theme})=>({
    minWidth: '40%',
    padding: '40px 10px 0px 80px',
    overflowBlock: 'hidden',
    [theme.breakpoints.down('md')]:{
        padding: '20px 40px',
        marginLeft: '20px'
    }

}))
    

const Image = styled('img')({
    padding: '15px',
    maxHeight: '330px'
})

const StyleButton = styled(Button)(({theme})=>({
    width: '45%',
    height: '50px',
    marginTop:'10px',
    [theme.breakpoints.down('lg')]:{
        width: '45%'
    }
}))
    


const ActionItems = ({products}) =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);

    const {id} = products

    const addItemToCart = () =>{

        dispatch(addToCart(id, quantity))
        navigate('/cart');

    }



    return(
        <LeftContainer>
            <Box style={{padding: '15px 20px', border: '1px solid #f0f0f0'}}>
                <Image src={products.detailUrl} alt="productImage"/>
            </Box>
            <StyleButton variant='contained' style={{marginRight: 35, background: '#ff9f00'}}><Cart/>Buy Now</StyleButton>
            <StyleButton onClick={addItemToCart} variant='contained'style={{background: '#fb541b'}}><Flash/>Add to Cart</StyleButton>
            
        </LeftContainer>
    )
}

export default ActionItems