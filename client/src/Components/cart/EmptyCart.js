import {Box, Typography, styled} from '@mui/material'

const Component = styled(Box)`
    height: 65vh;
    width: 80%;
    background: #FFF;
    margin: 80px 140px;
`

const Container = styled(Box)`
    text-align: center;
`
const Image = styled('img')`
    height: 162px;
    text-decoration: none;
    color: inherit;
    border: none;
    outline: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`


const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return(
        <Component>
            
                {
                    isLoggedIn==='true'
                    ?
                    <Container>
                        <Image src={imgurl} alt='Empty'/>
                        <Typography>Your Cart is empty?</Typography>
                        <Typography>Add items to it now</Typography>
                    </Container>
                    :
                    <Container>
                        <Image src={imgurl} alt='Empty'/>
                        <Typography>Missing Cart items?</Typography>
                        <Typography>Login to see the items you added previously</Typography>
                    </Container>
                }
            
        </Component>
    )
}
export default EmptyCart;