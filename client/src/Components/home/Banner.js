import Carousel from 'react-multi-carousel'
import {bannerData} from '../../Constants/Data'
import "react-multi-carousel/lib/styles.css";
import {styled} from '@mui/material'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Image = styled('img')(({theme})=>({
  width: '100%',
  height: '',
  [theme.breakpoints.down('md')]:{
    objectFit: 'cover',
    height: 190
  }
}))

const Banner = () =>{
  return(
    <Carousel responsive={responsive} swipeable={false} draggable={false} showDots={true} infinite={true} autoPlay={true} autoPlaySpeed={1000}>  

      {
          bannerData.map( data => (
            <Image key={data.url} src={data.url} alt='banner'/>
          ))
      } 

    </Carousel>
  )
}

export default Banner