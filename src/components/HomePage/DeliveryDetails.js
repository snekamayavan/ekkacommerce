import { Box, Grid, Typography } from "@mui/material";
import React from "react";



const DeliveryDetails =()=>{
    return(
        <div style={{padding:"60px 0"}}> 
            <Grid container spacing={2}>
                <Grid size={4} style={{paddingTop:'30px'}}>
                    <div style={{display:"flex" , justifyContent:"right",gap:'30px'}}>
                        <div style={{textAlign:"right"}}>
                                <Typography variant="h5" style={{padding:"15px 0",fontWeight:"600"}}>Fast Shipping</Typography>
                            <div style={{display:"flex" , justifyContent:"right"}}>
                                <Typography style={{width:"250px"}} variant="body2">We are available for fast shipping in every season 24x7 dellive in the world. The Printing and typesetting industry</Typography>
                            </div>
                        </div>
                        <div>
                            <img style={{width:"100px" , paddingTop:"60px"}} src="https://res.cloudinary.com/dngnlsmso/image/upload/v1767282991/Screenshot_2026-01-01_212605_ihuxxr.png" />
                        </div>
                    </div>
                    <div style={{display:"flex" , justifyContent:"right",gap:'30px'}}>
                        <div style={{textAlign:"right"}}>
                            <Typography variant="h5" style={{padding:"15px 0",fontWeight:"600"}}>Trust Gurantee</Typography>
                            <div style={{display:"flex" , justifyContent:"right"}}>
                                <Typography  style={{width:"250px"}} variant="body2">The Printing and typesetting industry. We are available for fast shipping in every season 24x7 deliver in the world.</Typography>    
                            </div>
                        </div>
                        <div>
                             <img style={{width:"100px" , paddingTop:"60px"}} src="https://res.cloudinary.com/dngnlsmso/image/upload/v1767283088/Screenshot_2026-01-01_212751_guv2cl.png"/>
                        </div>
                    </div>
                </Grid>
                <Grid size={4}>
                    <div>
                        <img style={{width:"400px"}} src="https://res.cloudinary.com/dngnlsmso/image/upload/v1767280713/Screenshot_2026-01-01_204545_pukr5q.png"/>
                    </div>
                </Grid>
                <Grid size={4}>
                    <div style={{display:"flex",justifyContent:'left',paddingTop:"50px",gap:'20px'}}>
                        <div>
                            <img style={{width:'100px',paddingTop:"50px"}} src="https://res.cloudinary.com/dngnlsmso/image/upload/v1767281656/Screenshot_2026-01-01_205831_lsllsr.png"/>
                        </div>
                        <div>
                            <Typography style={{fontWeight:"600"}} variant="h5">24x7 Free Support</Typography>
                            <Typography  style={{width:"220px",paddingTop:"20px"}} variant="body2">Lorem lpsum is simply dummy text of the printing and typesetting industry. the printing and typesetting industry.</Typography>
                        </div>
                    </div>
                    <div style={{display:"flex",justifyContent:'left',paddingTop:"30px",gap:'20px'}}>
                        <div>
                            <img style={{width:'100px',paddingTop:"50px"}} src="https://res.cloudinary.com/dngnlsmso/image/upload/v1767281656/Screenshot_2026-01-01_205831_lsllsr.png"/>
                        </div>
                        <div>
                            <Typography style={{fontWeight:"600"}} variant="h5">Daily Discounts</Typography>
                            <Typography  style={{width:"220px",paddingTop:"20px"}} variant="body2">Lorem lpsum is simply dummy text of the printing and typesetting industry. the printing and typesetting industry.</Typography>
                        </div>
                    </div>


                </Grid>
            </Grid>
        </div>
    )
}
export default DeliveryDetails;