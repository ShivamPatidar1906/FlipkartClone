import { useEffect, useState } from 'react';
import {InputBase, styled, Box, List, ListItem} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/actions/productActions';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
    background: #fff;
    width: 36%;
    margin-left: 10px;
    border-radius: 2px;
    display: flex;
    align-items: center
`

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
`


const Search = () => {
    const [text, setText] = useState('')
    const {products} = useSelector(state => state.getProducts)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    }, [dispatch])

    const getText = (text) =>{
        setText(text)
        console.log(text)
    }

    return(
        <>
            <SearchContainer>
                <InputSearchBase placeholder='Search for products, brands and more' onChange={(e)=>getText(e.target.value)} value={text} />
                <SearchIcon style={{color:'blue'}}/>
            {
                text &&
                <List style={{position:'absolute',backgroundColor:'#ffffff', color:'#000000', marginTop:'300px', textDecoration:'none'}}>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                            <ListItem key={product.title.longTitle}>
                                <Link to={`/product/:${product.id}`} onClick={()=>setText('')} style={{textDecoration:'none', color:'inherit'}}>
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }
                </List>
            }
            </SearchContainer>
        </>
    )
}

export default Search