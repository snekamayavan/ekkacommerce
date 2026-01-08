import { FormatAlignJustify, Padding } from "@mui/icons-material";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';



const Footer =()=>{
    return(
        <div style={{padding:'0 80px'}}>
            <div style={{display:"flex" , justifyContent:"center" , padding:"30px 0 20px 0"}}>
                <Box style={{display:'flex',gap:'30px'}}>
                    <Link  style={{textDecoration:"none" , color:"black"}}>Facebook</Link>
                    <Link  style={{textDecoration:"none" , color:"black"}}>Twitter</Link>
                    <Link  style={{textDecoration:"none" , color:"black"}}>Instagram</Link>
                    <Link  style={{textDecoration:"none" , color:"black"}}>Linkedin</Link>
                    <Link  style={{textDecoration:"none" , color:"black"}}>Google</Link>
                    <Link  style={{textDecoration:"none" , color:"black"}}>Youtube</Link>
                </Box>
            </div>
            <div >
                <Divider />
            </div>
            <div style={{display:'flex',justifyContent:'space-between',padding:'10px 20px'}}>
                <div>
                    <img src="https://res.cloudinary.com/dngnlsmso/image/upload/v1766644557/Screenshot_2025-12-25_120206-removebg-preview_h0hh73.png"/>
                    <div>
                        <Typography style={{width:'400px'}} variant="body2">Lorem lpsum is simple dummy text of the printing and typesetting industry. Lorem lpsum has been the industy's standard dummy text ever since the 1500s, when an unknown printer took a galley</Typography>
                    </div>
                </div>
                <div style={{paddingTop:'20px'}} >
                    <Typography style={{fontWeight:"600"}} variant="body1">About</Typography>
                    <div style={{padding:"10px 0",textDecoration:'none',color:'black'}}>
                        <Link  style={{textDecoration:"none" , color:"black"}}>About Grocery</Link>
                        <div style={{padding:"10px 0"}}>
                            <Link  style={{textDecoration:"none" , color:"black"}}>Plans & Pricing</Link>
                        </div>
                            <Link  style={{textDecoration:"none" , color:"black"}}>Services</Link>
                        <div style={{padding:"10px 0"}}>
                            <Link  style={{textDecoration:"none" , color:"black"}}>Blog</Link>
                        </div>
                    </div>
                </div>
                <div style={{paddingTop:'20px'}}>
                    <Typography style={{fontWeight:"600"}} variant="body1">Quick Links</Typography>
                    <div style={{padding:"10px 0"}}>
                        <Link  style={{textDecoration:"none" , color:"black"}}>Home</Link>
                        <div style={{padding:"10px 0"}}>
                            <Link style={{textDecoration:"none" , color:"black"}}>Abouts</Link>
                        </div>
                            <Link style={{textDecoration:"none" , color:"black"}}>Testimonial</Link>
                        <div style={{padding:"10px 0"}}>
                            <Link style={{textDecoration:"none" , color:"black"}}>Contact Us</Link>
                        </div>
                    </div>
                </div>
                <div style={{paddingTop:'20px'}}>
                    <Typography style={{fontWeight:"600"}} variant="body1">Our Products</Typography>
                    <div style={{padding:"10px 0"}}>
                        <Link style={{textDecoration:"none" , color:"black"}}>Dry Fruits</Link>
                        <div style={{padding:"10px 0"}}>
                            <Link style={{textDecoration:"none" , color:"black"}}>Backery</Link>
                        </div>
                            <Link style={{textDecoration:"none" , color:"black"}}>Grocery & staples</Link>
                        <div style={{padding:"10px 0"}}>
                            <Link style={{textDecoration:"none" , color:"black"}}>Fresh Oil</Link>
                        </div>
                    </div>
                </div>
                <div style={{paddingTop:'20px'}}>
                    <Typography style={{fontWeight:"600"}} variant="body1">Resources</Typography>
                    <div style={{padding:"10px 0"}}> 
                            <Link style={{textDecoration:"none" , color:"black"}}>Support center</Link>
                        <div style={{padding:"10px 0"}}>
                          <Link  style={{textDecoration:"none" , color:"black"}}>Documentation</Link>
                        </div>
                            <Link  style={{textDecoration:"none" , color:"black"}}>Newsletter</Link>
                        <div style={{padding:"10px 0"}}>
                            <Link  style={{textDecoration:"none" , color:"black"}}>Blog</Link>
                        </div>
                    </div>
                </div> 
            </div>
            <div style={{position:"relative"}}>
                <Divider />
                <div style={{position:"fixed" , right:"30px" , bottom:"20px"}}>
                    <Button style={{color:"white" , backgroundColor:"green" }}> <KeyboardDoubleArrowUpIcon /> </Button>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',paddingTop:'10px'}}>
                <Typography variant="body1">Copyright @ 2026 Ekka all rights reserved</Typography>
                <div>
                    <Link style={{textDecoration:"none"}}><span style={{color:'green'}}>Terms of Use</span> | Privacy policy</Link>
                </div>
            </div>
        </div>

    )
}
export default Footer;
