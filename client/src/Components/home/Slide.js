import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Box, Typography, Button, styled, Divider} from '@mui/material'
import Countdown from 'react-countdown';
import {Link} from 'react-router-dom'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Component = styled(Box)`
  margin: 15px;
  background: #ffffff;
`
const Deal = styled(Box)`
  padding: 25px;
  display: flex;
  align-items: center;
`
const Image = styled('img')`
  margin: 10px;
  margin: 20px;
  width: auto;
  height: 150px;
`


const Slide = ({ products, title, timer }) => {
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  const renderer = ({hours,minutes,seconds}) =>{
    return <Box variant='span'>{hours} : {minutes} : {seconds} left</Box>
  }
  return (
    <Component>
      <Deal>
        <Typography style={{fontSize:20}}>{title}&nbsp;</Typography>
        { timer &&(
          <>
        <img src={timerURL} alt='timerImage' style={{width:25}}/>&nbsp;
        <Countdown date={Date.now()+5.04e+7} renderer = {renderer}/>
        </>
        )}
        <Button variant='contained' color='primary' style={{marginLeft:'auto'}}>View all</Button>
      </Deal>
      <Divider/>
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      centerMode={true}
    >
      {products.map((data) => (
        <Link to={`/product/:${data.id}`} key={data.url} style={{textAlign:'center',textDecoration:'none'}}>
          <Image src={data.url} alt='product' />
          <Typography style={{fontWeight:600, color:'#212121'}}>{data.title.shortTitle}</Typography>
          <Typography style={{color:'green'}}>{data.discount}</Typography>
          <Typography style={{color:'#212121',opacity:'.6'}}>{data.tagline}</Typography>
        </Link>
      ))}
    </Carousel>
    </Component>
  );
};

export default Slide;
