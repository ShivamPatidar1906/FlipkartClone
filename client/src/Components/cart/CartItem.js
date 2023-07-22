import { Box, Typography,Button, styled } from "@mui/material"
import {addEllipsis} from '../../utils'
import GroupButton from "./GroupButton"
import {removeFromCart} from '../../Redux/actions/cartAction'
import { useDispatch } from "react-redux"

const Container = styled(Box)`
    border-top: 1px solid #f0f0f0;
    display: flex;
    background-color: #FFF;
`
const LeftContainer = styled(Box)`
    margin: 20px;   
    display: flex;
    flex-direction: column;
`
const SmallText = styled('Typography')`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`

const CartItem = ({item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch = useDispatch()

    const removeItemFromCart = (id) =>{
        dispatch(removeFromCart(id))
    }

    return(
        <Container>
            <LeftContainer>
                <img src={item.url} alt='product' style={{height:140, width:140}}/>
                <GroupButton/>
            </LeftContainer>
            <Box style={{margin: '20px'}}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>seller: RetailNet
                    <Box component='span'><img alt='flipkart' src={fassured} style={{width: '60px', marginLeft: '8px'}}/></Box>
                </SmallText>  
                <Typography>
                        <Box component='span' style={{fontSize:28}}>₹{item.price.cost}</Box>&nbsp;&nbsp;
                        <Box component='span' style={{color:'#878787'}}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;
                        <Box component='span' style={{color: '#388E3C'}}>{item.price.discount}</Box>
                </Typography>
                <Button onClick={()=>{removeItemFromCart(item.id)}} style={{marginTop: '20px',fontSize:'16px', color:'#000'}}>Remove</Button>
            </Box>
        </Container>
    )
}
export default CartItem