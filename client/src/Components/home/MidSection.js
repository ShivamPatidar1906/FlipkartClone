import { imageURL } from '../../Constants/Data';
import { Grid, styled } from '@mui/material';

const Wrapper = styled(Grid)`
  margin-top: 10px;
  justify-content: space-between;
`;

const Image = styled('img')(({ theme }) => ({
  marginTop: 20,
  width: '100%',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    objectFit: 'cover',
    height: 230,
  },
}));

const MidSection = () => {
  const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (
    <>
      <Wrapper container>
        {imageURL.map((image) => (
          <Grid item lg={4} md={4} sm={12} xs={12} key={image}>
            <img src={image} style={{ width: '100%' }} alt='midImage' />
          </Grid>
        ))}
      </Wrapper>
      <Image src={url} alt='covid' />
    </>
  );
};

export default MidSection;
