import{Box, Typography, styled, Table, TableCell, TableRow, TableBody } from '@mui/material'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const SmallText = styled(Box)`
    vertically-align: baseline;
    font-size: 14px;
    & > p{
        font-size: 14px;
        margin-top: 10px;
    }
`
const StyledOffer = styled(LocalOfferIcon)`
    font-size: 18px;
    margin-right: 10px;
    color: green;
`

const ProductDetails = ({products}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(4 * 24 * 60 * 60 * 1000))
    return(
        <>
            <Typography>{products.title.longTitle}</Typography>
                    <Typography style={{marginTop:'5 px',fontSize:14, color:'#808080'}}>80 Ratings & 43 Reviews
                    <Box component='span'><img src={fassured} alt="imgLogo" style={{marginLeft: 20, width: 77}}/></Box>
                    </Typography>
                    <Typography>
                        <Box component='span' style={{fontSize:28}}>₹{products.price.cost}</Box>&nbsp;&nbsp;
                        <Box component='span' style={{color:'#878787'}}><strike>₹{products.price.mrp}</strike></Box>&nbsp;&nbsp;
                        <Box component='span' style={{color: '#388E3C'}}>{products.price.discount}</Box>
                    </Typography>
            <Typography>Available offers</Typography>
            <SmallText>
                <Typography><StyledOffer/>Bank OfferFlat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999T&C
                </Typography>
                <Typography><StyledOffer/>Bank OfferFlat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹40,000 to ₹49,999T&C</Typography>
                <Typography><StyledOffer/>Bank OfferFlat ₹4,000 Off on HDFC Bank Credit Card EMI Trxns on orders of ₹50,000 and aboveT&C</Typography>
                <Typography><StyledOffer/>Special PriceGet extra 18% off (price inclusive of cashback/coupon)T&C</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Delivery</TableCell>
                        <TableCell>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Warranty</TableCell>
                        <TableCell>6 Months</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{verticalAlign:'baseline'}}>Seller</TableCell>
                        <TableCell>
                            <Box component='span'>SuperComNet</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from {products.price.cost}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} alt='adURL' style={{width:'380px'}}></img>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{verticalAlign:'baseline'}}>Description</TableCell>
                        <TableCell>{products.description}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetails