import { Box, Button, Divider, Rating, Typography ,Avatar} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import StorefrontIcon from '@mui/icons-material/Storefront';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ProductDetails = () =>{
    return(
        <div style={{paddingTop:'80px'}}>
            <Box >
                <Typography variant="h5">UniSex Cotton Neck Hoodies</Typography>
                <Box style={{display:'flex',gap:"10px",paddingTop:'20px'}}>
                    <Rating />
                    <Box>
                        <Link>Be the first to review this Product</Link>
                    </Box>
                </Box>
                <Box style={{paddingTop:'20px'}}>
                    <Typography style={{color:'gray'}}  variant="body1">Lorem lpsum is simply dummy text to the printing and types eting industy. Lorem lpsum has been the industry's standar dummy text ever since the 1990.</Typography>
                </Box>
            </Box>
            <Box style ={{border:'0.1rem solid gray'}}>
                <Box style={{padding:"10px"}}>
                    <Typography variant="h5">Real time <span style={{backgroundColor:'skyblue'}}>24</span> Visitor Right Now!</Typography>
                    <Typography variant="body1">Hurry up!left 29 in stock</Typography>
                </Box>
            </Box>
            <Box style={{display:'flex',justifyContent:"space-between",paddingTop:'15px'}}>
                    <div>
                        <Typography style={{color:'gray'}} variant="body1">As low as</Typography>
                        <div>
                            <Typography variant="h5">$97.00</Typography>
                        </div>
                    </div>
                    <div>
                        <Typography  style={{color:'gray'}} variant="body1">IN STOCK</Typography>
                        <div>
                            <Typography variant="h5">SKU#:WH12</Typography>
                        </div>
                    </div> 
                </Box>
                <Box style={{paddingTop:'10px'}} >
                    <Divider  />
                </Box>
                <Box style={{paddingTop:'30px'}}>
                    <Typography style={{padding:"0 0 15px 0"}} variant="h5">Size</Typography>
                    <div style={{display:'flex',gap:'10px'}}>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                    </div>
                </Box>
                <Box style={{paddingTop:'20px'}}>
                    <Typography variant="h5">Color</Typography>
                    <Box>
                        <Button><Avatar style={{backgroundColor:"black" , color:"black" , width:"20px" , height:"20px"}}/></Button>
                        <Button><Avatar style={{backgroundColor:"brown" , color:"brown" , width:"20px" , height:"20px"}}/></Button>
                        <Button><Avatar style={{backgroundColor:"violet" , color:'violet' , width:"20px" , height:"20px"}}/></Button>
                    </Box>
                </Box>
                <Box style={{paddingTop:'20px'}}>
                    <Divider />
                </Box>
                <Box style={{paddingTop:'20px'}}>
                    <div style={{display:'flex'}}>
                        <Button style={{backgroundColor:"blue",color:'white'}}><span style={{fontWeight:'600'}}>Add to Card</span></Button>
                        <div>
                            <Button><StorefrontIcon style={{color:'black'}} /></Button>
                            <Button><RemoveRedEyeIcon style={{color:'black'}} /></Button>
                        </div>
                    </div>
                </Box>
                <Box style={{paddingTop:'10px'}}>
                    <Divider />
                </Box>
                {/* <Box style={{display:'flex',gap:'10px',paddingTop:'20px'}}>
                    <button ><FacebookIcon  /></button>
                    <button><TwitterIcon /></button>
                    <button><InstagramIcon /></button>
                    <button><WhatsAppIcon /></button>
                </Box> */}
        </div>
    )

}
export default ProductDetails;