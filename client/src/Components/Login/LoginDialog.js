import Dialog from '@mui/material/Dialog';
import {Box, TextField, Typography, Button, styled} from '@mui/material'
import { useContext, useState, useEffect } from 'react';
import {authenticateSignup, authenticateLogin} from '../../service/api'
import { DataContext } from '../../Context/DataProvider';


const Component = styled(Box)`
height: 95vh;
width: 100vh;
overflow: hidden;
`
const Image = styled(Box)`
    background: #2480f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 65% no-repeat;
    height: 100%;
    width: 30%;
    padding: 45px 35px;
    & > p, & > h5{
        color: #ffffff;
        font-weight: 600;
    }
`
const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 15px 35px;
    flex: 1;
    gap: 20px;
    max-width: 400px;
`


const LoginButton = styled(Button)`
    text-transform: none;
    background: #fb641b;
    color: #ffffff;
`

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fb641b;
    color: #ffffff;
`

const Text = styled(Typography)`
    font-size: 12px;
`

const CreateAccount = styled(Typography)`
    font-size: 12px;
    text-align: center;
    color: #2480f0;
    cursor: pointer;
`

const Error = styled(Typography)`
    font-size: 13px;
    color : #ff6161;
    line-height : 0;
    font-weight: 600;
    margin-top: 10px;
`


const signUpInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    email: '',
    number: '',
}

const loginInitialValues = {
    username: '',
    password: ''
}

const LoginDialog = ({open, setOpen}) => {

    const accountIntialValues = {
        login: {
            view: 'login',
            heading: 'Login',
            subHeading: 'Get access to your Orders, Wishlist and Recommendations'
        },
        signup: {
            view: 'signup',
            heading: "Looks like you're new here!",
            subHeading: 'Sign up with your mobile number to get started'
        }
    }

    const [account, toggleAccount] = useState(accountIntialValues.login)
    const [signUp, setSignup] = useState(signUpInitialValues)
    const [login, setLogin] = useState(loginInitialValues)
    const {setAccount} = useContext(DataContext)
    const [error,setError] = useState(false);

    const handleClose = () =>{
        setOpen(false);
        toggleAccount(accountIntialValues.login)
        setError(false)
    }

    const toggleSignup = () =>{
        toggleAccount(accountIntialValues.signup)
    }
    
    const onInputChange = (e) =>{
        setSignup({...signUp, [e.target.name] : e.target.value})
    }
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
          const firstname = localStorage.getItem('firstname');
          setAccount(firstname);
        } else {
          setAccount(null);
        }
      }, [setAccount]);

    const signupUser = async() =>{
        let response = await authenticateSignup(signUp)
        if(!response) return;
        handleClose();
        setAccount(signUp.firstname);
        localStorage.setItem('firstname', signUp.firstname);
        localStorage.setItem('isLoggedIn', 'true');
    }
    const loginUser = async () =>{
       let response =  await authenticateLogin(login)
       console.log(response)
       if(response.status === 200)
       {
            handleClose();
            setAccount(response.data.data.firstname)
            localStorage.setItem('firstname', response.data.data.firstname);
            localStorage.setItem('isLoggedIn', 'true');
       }
       else
       {
            setError(true)
       }
    }
    const onValueChange = (e) =>{
        setLogin({...login, [e.target.name] : e.target.value})
    }
    return(
        <>
            <Dialog open={open} onClose={handleClose} PaperProps={{sx: {maxWidth: 'unSet'}}}>
                <Component>
                    <Box style={{display:'flex', height:'100%'}}>
                        <Image>
                            <Typography variant='h5'>{account.heading}</Typography>
                            <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
                        </Image>
                        {
                            account.view === 'login'
                            ?
                            <Wrapper>
                                <TextField variant='standard' onChange={(e)=>{onValueChange(e)}} name='username' label='Enter username'/>

                                {error && <Error>Invalid username or passwrod</Error>}

                                <TextField variant='standard' onChange={(e)=>{onValueChange(e)}} name='password' label='Enter password'/>
                                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                                <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                                <Typography style={{textAlign: 'center'}}>OR</Typography>
                                <RequestOTP>Request OTP</RequestOTP>
                                <CreateAccount onClick={()=>{toggleSignup()}}>New to Flipkart? Create an account</CreateAccount>
                            </Wrapper>
                            :
                            <Wrapper>
                            <TextField variant='standard' onChange={(e)=>{onInputChange(e)}} name='firstname' label='Enter first name'/>
                            <TextField variant='standard' onChange={(e)=>{onInputChange(e)}} name='lastname' label='Enter last name'/>
                            <TextField variant='standard' onChange={(e)=>{onInputChange(e)}} name='username' label='Enter username'/>
                            <TextField variant='standard' onChange={(e)=>{onInputChange(e)}} name='password' label='Enter password'/>
                            <TextField variant='standard' onChange={(e)=>{onInputChange(e)}} name='email' label='Enter your email'/>
                            <TextField variant='standard' onChange={(e)=>{onInputChange(e)}} name='number' label='Enter your phone number'/>
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            <LoginButton onClick={()=>{signupUser()}}>Continue</LoginButton>
                            </Wrapper>
                        }
                    </Box>
                </Component>
            </Dialog>
        </>
    )
}

export default LoginDialog