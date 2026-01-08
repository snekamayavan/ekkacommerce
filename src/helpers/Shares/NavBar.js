import React from "react";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';

import { Link } from "react-router-dom";


const NavBar =()=>{
    return(
        <div style={{padding:"15px 50px"}}>
            <Box style={{display:"flex",justifyContent:'space-between'}}>
                <Typography variant="body1" style={{color:"gray"}}>100% secure delivery without contacting the courier</Typography>
                <Box >
                    <Button style={{color:"gray"}}>Currency<ExpandMoreIcon/></Button>
                    <Button style={{color:"gray"}}>Language<ExpandMoreIcon/></Button>
                </Box>
            </Box>
            <Divider/>
            <div style={{padding:"15px 0"}}>
                <Box style={{display:'flex',justifyContent:'space-between'}}>
                    <img  style={{width:'100px',height:"50px"}} src="https://res.cloudinary.com/dngnlsmso/image/upload/v1766644557/Screenshot_2025-12-25_120206-removebg-preview_h0hh73.png"/>
                    <Box style={{display:"flex",gap:"25px",paddingTop:"15px"}}>
                        <Link to="/" style={{textDecoration:"none",color:"black"}}>Home</Link>
                        <Link style={{textDecoration:"none",color:"black"}}>Categories</Link>
                        <Link to="/productspage" style={{textDecoration:"none",color:"black"}}>Products</Link>
                        <Link style={{textDecoration:"none",color:"black"}}>Pages</Link>
                        <Link style={{textDecoration:"none",color:"black"}}>Others</Link>
                 
                        <Link style={{textDecoration:"none",color:"black"}}>Blog</Link>
                        <Link style={{textDecoration:"none",color:"black"}}>Element</Link>
                        <Link style={{textDecoration:"none",color:"black"}}>Hot Offers</Link>
                    </Box>
                    <Box style={{paddingTop:"10px",}}>
                        <Button style={{color:'green'}} variant="outlined">Login/Sing up<ExpandMoreIcon/></Button>
                    </Box>  
                </Box>  
            </div>
            <Divider />
            <div style={{padding:'15px 0'}}>
                <Box style={{display:"flex",justifyContent:'space-between'}}>
                    <Button variant="outlined" style={{backgroundColor:"green",color:"white"}}><DehazeRoundedIcon style={{marginRight:"10px"}}/>Shop By Categories<ExpandMoreIcon style={{marginLeft:"10px"}}/></Button>
                    <Box>
                        <TextField style={{width:"450px"}} variant="outlined" placeholder="Search Product here"></TextField>
                    </Box>
                    <Box>
                        <Button><FavoriteBorderRoundedIcon style={{color:"red" , fontSize:"30px"}}/></Button>
                        <Button><StorefrontRoundedIcon style={{color:"black" , fontSize:"30px"}}/></Button>
                    </Box>
                </Box>
            </div>
            <Divider/>
        </div>
    )
}

export default NavBar;