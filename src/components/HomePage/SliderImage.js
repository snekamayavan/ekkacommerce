import React from "react";
import { Typography, Grid, Box, Button, Divider, Paper} from "@mui/material";
import StorefrontIcon from '@mui/icons-material/Storefront';




const SliderImage =()=>{
    return(
        <div>
            <Grid container spacing={2}>
                <Grid size={6} style={{backgroundColor:"#E7FEFB"}} >
                    <Box style={{paddingTop:'80px',paddingLeft:"130px"}}>
                        <Typography style={{color:'green' , fontWeight:"600" , letterSpacing:"2px" ,textUnderlineOffset:"8px"}} variant="h4"><span style={{textDecoration:'underline'}}>All You</span> Need</Typography>
                        <Typography style={{paddingTop:"15px" , fontWeight:"700"}} variant="h3">FRESH <span style={{color:'green'}}>𝔾ℝ𝕆ℂ𝔼ℝ𝕐</span></Typography>
                        <Typography style={{paddingTop:"10px"}} variant="h5">DESERVE TO EAT FRESH</Typography>
                        <Box style={{paddingTop:"10px"}}>
                            <Button style={{backgroundColor:"green",color:'white'}} variant="outlined">Shop Now <StorefrontIcon style={{marginLeft:"10px"}}/></Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={6}>
                    <img style={{width:"660px",height:"400px"}} src="https://res.cloudinary.com/dngnlsmso/image/upload/v1766682363/Screenshot_2025-12-25_223232_zret1n.png"/>
                </Grid>
            </Grid>
    
        </div>

    )
}

export default SliderImage;