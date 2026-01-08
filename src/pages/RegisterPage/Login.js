import React from "react";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';



const LoginPage = () => {
  return (
    <div>
      <Box style={{display:"flex", justifyContent:"space-between", position: "relative" }}>
        <Box style={{backgroundColor:"orange",width:"700px",height:"100vh"}}>
          <img style={{width:"250px",paddingLeft:"200px ",paddingTop:"130px", }} src="https://res.cloudinary.com/dngnlsmso/image/upload/v1760345020/figma6_xdnvnx.png"/>
        </Box>
        <Box>
          <img style={{width:"160px",paddingRight:"250px",paddingTop:"100px"}} src="https://res.cloudinary.com/dngnlsmso/image/upload/v1765383392/e785ead5-99c7-480f-aeab-736941418863.png"/>
        </Box>   
      </Box>
      <Box>
        <Box style={{border:"0.1rem solid black",width:"350px",position: "absolute",top: "60px",left: "500px",padding:"15px", backgroundColor:"white",borderRadius:"15px",border:"none",}}>
          <Typography variant="body1">Welcome to Lorem</Typography>
          <Box style={{display:"flex"}} >
            <Typography variant="h3">Sign in</Typography>
            <Box style={{paddingLeft:"80px"}}>
              <Typography variant="body1">No Account ?</Typography>
              <Link to="/homepage" style={{color:"orange"}} variant="body1">Sign up</Link>
            </Box>
          </Box>
          <Box style={{padding:"10px 0"}}>
            <Typography  variant="body1">Enter your username or email address</Typography>
            <TextField  style={{width:"350px" , padding:"10px 0"}} variant="outlined" placeholder="Email or Username"/> 
          </Box>
          <Box>
            <Typography variant="body1">Enter your Password</Typography>
            <TextField  style={{width:"350px",padding:"10px 0"}} variant="outlined" placeholder="Password"/>
          </Box>
          <Box style={{paddingTop:"5px"}}>
            <Link style={{paddingLeft:"230px",color:"orange",}} href="#">Forgot Password</Link>
          </Box>
          <Box style={{paddingTop:"10px"}}>
            <Button style={{width:"350px",padding:"12px ",backgroundColor:"orange",color:'white', borderRadius:"5px",border:"none"}}>sign in</Button>
          </Box>
          <Divider style={{padding:"20px 0"}}>Or</Divider>
          <Box style={{display:"flex",gap:"5px"}}>
            <Button style={{width:"300px",backgroundColor:"lightyellow",color:"red",}}><GoogleIcon/> Sign in with Google</Button>
            <Box style={{display:"flex",gap:"10px"}}>
              <Button style={{backgroundColor:"gray",color:"blue"}}><FacebookIcon /></Button>
              <Box >
                <Button style={{color:"black",backgroundColor:"gray"}}><AppleIcon/></Button>
              </Box>
            </Box>
          </Box>
        </Box>     
      </Box>
    </div>
  );
}

export default LoginPage;



