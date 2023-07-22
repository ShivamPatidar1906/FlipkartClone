import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { getProductDetails } from '../../Redux/actions/productActions';
import {Box, styled, Grid} from '@mui/material'
import ActionItems from './ActionItems';
import ProductDetails from './ProductDetails'

const Component = styled(Box)`
    background: #f2f2f2;
    margin-top: 55px;
`

const Container = styled(Grid)(({theme})=>({

    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]:{
        margin: 0
    }

}))
    
const RightContainer = styled(Grid)(({theme})=>({

    marginTop: '28px',
    '& > p': {
        marginTop: '10px'
    },
    [theme.breakpoints.down('lg')]:{
        marginLeft: '10px'
    }
}))
    

const DetailView = () =>{

    

    const dispatch = useDispatch();
    const id = useParams();
    const {loading, products} = useSelector(state => state.getProductDetails)
    useEffect(() =>{
        dispatch(getProductDetails(id.id))
    }, [dispatch,id.id])
    return(
        <Component>
            {
                !loading && products && Object.keys(products).length &&
                <Container container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItems products={products}/>
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <ProductDetails products={products}/>
                    </RightContainer>
                </Container>
            }
        </Component>
    )
}
export default DetailView