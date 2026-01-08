import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const RegisterPage = () =>{
    return(
        <div>
            <Box style={{display:"flex", justifyContent:"space-between", position: "relative", }}>
                <Box style={{backgroundColor:"orange",width:"700px",height:"100vh"}}>      
                    <img style={{width:"250px",paddingLeft:"200px ",paddingTop:"130px", }} src="https://res.cloudinary.com/dngnlsmso/image/upload/v1760345020/figma6_xdnvnx.png"/>
                </Box>
                <Box>
                    <img style={{width:"160px",paddingRight:"250px",paddingTop:"100px"}} src="https://res.cloudinary.com/dngnlsmso/image/upload/v1765383392/e785ead5-99c7-480f-aeab-736941418863.png"/>
                </Box>   
            </Box>
            <Box style={{position:"absolute" ,top:"50px",left:"480px",width:"380px",border:"0.1rem solid gray",borderRadius:"15px",padding:"30px ",backgroundColor:"white",border:"none"}}>
                <Box style={{paddingTop:"10px"}}>
                    <Typography variant="body1">Welcome to Lorem</Typography>
                    <Box style={{display:"flex" , justifyContent:"space-between"}}>
                        <Typography style={{padding:"5px 0"}} variant="h3">Sign up</Typography>
                        <Box style={{paddingLeft:"80px"}}>
                            <Typography variant="body1">Have an account</Typography>
                            <Link to={"/login"} style={{color:"orange",padding:"10px 0"}} variant="body1">Sign in</Link>
                        </Box>
                    </Box>
                    <Box>
                        <Box style={{padding:"15px 0"}}>
                            <Typography variant="body1">Username or Email Address</Typography>
                            <TextField style={{width:"380px",padding:"10px 0"}} variant="outlined" placeholder="Username or email address"></TextField>
                            <Box style={{display:"flex" , justifyContent:"space-between",gap:"10px"}}>
                                <Box>
                                    <Typography  variant="body1">User name</Typography>
                                    <TextField style={{width:"180px"}} variant="outlined" placeholder="User name"></TextField>
                                </Box>
                                <Box>
                                    <Typography variant="body1">Contact No</Typography>
                                    <TextField style={{width:"180px"}} variant="outlined" placeholder="Contact Num"/>
                                </Box>
                            </Box>
                            <Box style={{padding:"10px 0"}}>
                                <Typography variant="body1">Enter your password</Typography>
                                <TextField style={{width:"380px"}} variant="outlined" placeholder="Password"/>
                            </Box>
                            <Box style={{padding:"10px 0"}}>
                                <Button style={{width:"380px",color:"white",background:"orange",padding:"10px"}}>Sign up</Button>
                            </Box>
                        </Box>
                    </Box>
                    
                </Box>
            </Box>
        </div>
    );
}
export default RegisterPage;


