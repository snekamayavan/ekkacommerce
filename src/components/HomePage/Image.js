import { Padding } from "@mui/icons-material";
import { Button, Typography,Box } from "@mui/material";
import React from "react";



const Image = () =>{
    return(
        <div style={{position:'relative'}}>
            <Box style={{padding:'0 80px'}}>
                <img style={{width:"100%",height:"500px",borderRadius:'20px'}} src="https://t3.ftcdn.net/jpg/07/04/86/14/360_F_704861433_mQKvkfcIJ8xVClZvQZIvuKuatKjTDdiW.jpg"/>
            </Box>
            <div style={{position:"absolute" , top:"50px" , left:"100px"}}>
                <div style={{display:"flex" , gap:"250px"}}>
                    <Box style={{padding:'60px 0 0 60px'}}>
                        <Typography style={{color:'white',fontWeight:"600", letterSpacing:"2px"}} variant="h3">Tasty, Yeah?</Typography>
                        <Typography style={{color:'white'}} variant="h3">Buy now!</Typography>
                        <Box style={{paddingTop:"20px"}}>
                            <Button  style={{backgroundColor:'white',border:'none'}} variant="outlined">Shop now</Button>
                        </Box>
                    </Box>
                    <Box>
                        <img src="https://res.cloudinary.com/dngnlsmso/image/upload/v1767595375/Screenshot_2026-01-03_214016-Photoroom_mhnmkq.png" />
                    </Box>
                </div>
            </div>
        </div>
    )
}
export default Image;