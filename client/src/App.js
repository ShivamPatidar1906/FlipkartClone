import './App.css';

// Import components

import Header from './Components/header/Header'
import Home from './Components/home/Home'
import {Box,styled} from '@mui/material'
import DataProvider from './Context/DataProvider';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DetailView from './Components/details/DetailView'
import Cart from './Components/cart/Cart'

const CustomCSS = styled(Box)`
  margin-top: 55px;
`

function App() {
  return (
    <Box style={{overflowX:'hidden'}}>
      <DataProvider>
        <BrowserRouter>
          <Header/>
          <CustomCSS>
            
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/product/:id' element={<DetailView/>} />
              <Route path='/cart' element={<Cart/>} />
            </Routes>
       
          </CustomCSS> 
        </BrowserRouter>
      </DataProvider>
    </Box>
  );
}

export default App;
