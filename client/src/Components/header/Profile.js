import { Box, Typography, Menu, MenuItem, styled } from '@mui/material';
import { useState } from 'react';
import {ExpandMore} from '@mui/icons-material';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';

const Profile = ({ account, setAccount }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

const Component = styled(Menu)`
  margin-top : 5px;
`
const logout = () =>{
    setAccount('')
    localStorage.removeItem('firstname')
    localStorage.removeItem('isLoggedIn')
}

  return (
    <>
      <Box onClick={handleClick} style={{display:'flex'}}>
        <Typography>{account}</Typography>
        <ExpandMore/>
      </Box>
      <Component
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose(); logout();}}>
            <PowerSettingsNewRoundedIcon color='primary' fontSize='medium'/>&nbsp;
            <Typography>Logout</Typography>
        </MenuItem>
      </Component>
    </>
  );
};

export default Profile;
