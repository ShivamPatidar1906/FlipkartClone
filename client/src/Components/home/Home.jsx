import NavBar from './NavBar'
import Banner from './Banner'
import {styled, Box} from '@mui/material'

import { getProducts } from '../../Redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Slide from './Slide'
import MidSection from './MidSection'

const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`

const Home = () => {


    const {products} = useSelector(state => state.getProducts);
    console.log(products);

    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getProducts())
        
    },[dispatch])

    return(
        <>

            <NavBar/>
            <Component>
                <Banner/> 
                <Slide products={products} title='Deal of the Day' timer={true}/>
                <MidSection/>
                <Slide products={products} title='Treading offers' timer={false}/>
                <Slide products={products} title='Recommended' timer={false}/>
                <Slide products={products} title='Top Picks for your' timer={false}/>
                <Slide products={products} title='Top Discount' timer={false}/>
                <Slide products={products} title="Season's top picks" timer={false}/>
                
            </Component>
        </>
    )
}

export default Home