import { FormatAlignJustify } from "@mui/icons-material";
import { Box, Button, Paper, TextareaAutosize, TextField, Typography } from "@mui/material";
import React from "react";



const Map = () =>{
    return(
        <div style={{padding:"20px 80px" ,position:"relative"}}>
            <img style={{width:"500PX",borderRadius:"5px"}} src="https://m-cdn.phonearena.com/images/articles/405002-image/MAPSUI-X.webp"/>
            <Paper style={{width:'650px',padding:'30px',borderRadius:'10px',position:'absolute',top:"60px",left:"500px"}}>
                <Typography variant="h4">Get in touch</Typography>
                <Box style={{display:"flex",padding:"20px 0",justifyContent:"space-between"}}>
                    <TextField style={{width:'300px'}} variant="outlined" placeholder="Enter your name"/>
                    <Box>
                        <TextField style={{width:'300px'}} variant="outlined" placeholder="Enter your Email"/>
                    </Box>
                </Box>
                <Box style={{display:"flex",justifyContent:"space-between"}}>
                    <TextField style={{width:'300px'}} variant="outlined" placeholder="phone Number"/>
                    <Box>
                        <TextField style={{width:'300px'}} variant="outlined" placeholder="Subject"/>
                    </Box>
                </Box>
                <Box style={{paddingTop:'20px'}}>
                    <TextareaAutosize style={{width:"620px" , height:"100px" , padding:"12px" , fontSize:"16px"}} placeholder="Enter your comment here..."/>
                </Box>
                <Box style={{paddingTop:'20px'}}>
                <Button style={{backgroundColor:"green",color:"white"}}  variant="outlined">Sumbit Now</Button>
                </Box>
            </Paper>
        </div>

    )
}
export default Map;