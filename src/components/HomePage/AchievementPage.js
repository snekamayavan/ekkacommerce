import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";





const AchievementPage =()=>{

    const details =([
        {
            img : "https://res.cloudinary.com/dngnlsmso/image/upload/v1767340410/Screenshot_2026-01-02_131547_ztltxf.png",
            num : "4512+",
            text : "Project Completed"
        },
        {
            img : "https://res.cloudinary.com/dngnlsmso/image/upload/v1767341358/Screenshot_2026-01-02_133842_rb6yb1.png",
            num : "3540+",
            text : "Satisfied Clients"
        },
        {
            img : "https://res.cloudinary.com/dngnlsmso/image/upload/v1767341541/Screenshot_2026-01-02_134203_dtvmrr.png",
            num : "120+",
            text : "Awards Winning"
        },
        {
            img : "https://res.cloudinary.com/dngnlsmso/image/upload/v1767341662/Screenshot_2026-01-02_134407_aeb4ds.png",
            num : "1570+",
            text : "Total Products"
        },
    ])

    return(
    <div style={{position:'relative'}}>
        <Box>
            <img style={{width:"100%" , height:"300px"}} src="https://png.pngtree.com/thumb_back/fh260/background/20230203/pngtree-simple-aesthetic-pastel-color-background-with-hand-drawn-leaves-image_1540985.jpg"/>
        </Box>
        <div style={{position:"absolute" , top:"50px" , left:"500px"}}>
            <Typography style={{fontWeight:'600'}} variant="h4">Our Achievement</Typography>
        </div>
        <div style={{position:"absolute" , bottom:"-115px" , padding:"0 100px"}}>
            <Grid container spacing={8}>
                {details.map(detail =>(
                    <Grid size={3}>
                        <Paper style={{textAlign:"center" , width:"270px"}}>
                            <img src={detail.img}/>
                            <Typography variant="h4" style={{fontWeight:"600" , paddingTop:"20px"}}>{detail.num}</Typography>
                            <Typography style={{paddingBottom:"20px"}} variant="h6">{detail.text}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    </div>
    )
}
export default AchievementPage;