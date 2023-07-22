import {useSelector} from 'react-redux'
import {Grid, Typography, Box,Button, styled} from '@mui/material'
import TotalView from './TotalView'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'


const Container = styled(Grid)(({theme})=>({
    padding: '30px 135px',
    [theme.breakpoints.down('md')]:{
        padding: '15px 0px'
    }
}))
const Header = styled(Box)`
    padding: 15px 24px;
    background-color: #FFF;
`

const ButtonWrapper = styled(Box)`
    padding: 16px 22px;
    background: #FFF;
    box-shadow: 0px -2px 10px 0px rgb(0 0 0/ 10%);
    border-top: 1px solid #f0f0f0;
`
const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background-color: #fb641b;
    color: #fff;
    width: 150px;
    height: 46px;
    border-radius: 2px;
`
const LeftComponent = styled(Grid)(({theme})=>({
    paddingRight: 15,
    [theme.breakpoints.down('md')]:{
        marginBottom: 15
    }
}))

const RightComponent = styled(Grid)(({theme})=>({
    [theme.breakpoints.down('md')]:{
        marginTop:10
    }
}))

const Cart = () =>{

    const {cartItems} = useSelector(state => state.cart) 

    return(
        <>
            {
                cartItems.length ?
                <Container container>
                    <LeftComponent item lg={8} md={8} sm={11} xs={11}>
                        <Header>
                            <Typography>My cart({cartItems.length})</Typography>
                        </Header>
                        {
                            cartItems.map(item =>(
                                <CartItem key='ok' item={item}/>
                            ))
                        }
                        <ButtonWrapper>
                            <StyledButton>Place Order</StyledButton>
                        </ButtonWrapper>
                    </LeftComponent>
                    <RightComponent>
                        <TotalView cartItems={cartItems} item lg={3} md={3} sm={12} xs={12}/>
                    </RightComponent>
                </Container>
                :<EmptyCart/>
            }
        </>
    )
}

export default Cart