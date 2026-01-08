import { Box, Typography } from "@mui/material";
import React from "react";





const ImageFlex = () => {
    return(
        <div>
            <Box style={{padding:"0px 100px",display:'flex'}}>
                <Box >
                    <Box style={{display:'flex',gap:"15px"}}>
                        <img style={{width:"300px",height:"350px",borderRadius:"10px"}} src="https://img.freepik.com/darmowe-zdjecie/z-bliska-kobieta-dbajaca-o-ogrod_329181-16483.jpg?semt=ais_user_personalization&w=740&q=80"/>
                        <Box style={{paddingTop:"120px"}}>
                            <img style={{width:'250px',height:"230px",borderRadius:"10px"}} src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2022-10/close-up-box-with-vegetables-hands-mature-man-min.jpg"/>
                        </Box>
                    </Box>
                    <Box style={{display:'flex',gap:"15px",padding:"20px 30px"}}>
                        <img style={{width:"230px", height:'260px',borderRadius:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JX0DRtaVv0kJdBcAC1tVDJCf4ZFkh-NS3g444Wk23JYgss0a"/>
                        <Box>
                            <img style={{width:"200px",height:"200px",borderRadius:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhP7ouGVOd-UKkYndHMooDDzIcutZ-6FSWwvrmZVIONugsPhLd"/>
                        </Box>
                    </Box>
                </Box>
                 <Box style={{padding:'130px 30px'}}>
                    <Typography style={{fontWeight:'600',fontSize:"30px"}} variant="h2">We Are Healthy Food</Typography>
                    <div style={{paddingTop:'10px'}}>
                        <Typography style={{width:'600px',color:'gray'}} variant="body2">Lorem lpsum is simplly dummy text of the printing and typeseting industry.</Typography>
                    </div>
                    <div style={{padding:"8px 0"}}>
                        <Typography style={{color:'gray'}} variant="body2">Lorem lpums has been the idustry's standard dummy text ever since the </Typography>
                    </div>
                    <Typography style={{color:'gray'}} variant="body2">1500s, when an unknown printer took a galley to type and scrambled it</Typography>
                    <div style={{padding:"8px 0"}}>
                        <Typography style={{color:'gray'}} variant="body2"> to make a type specimen book.</Typography>
                    </div>
                    <Box style={{display:'flex',paddingTop:'10px'}}>
                        <img style={{width:'80px'}} src="https://res.cloudinary.com/dngnlsmso/image/upload/v1766932669/Screenshot_2025-12-28_200437_pum9vf.png"/>
                        <Box>
                            <Typography style={{fontSize:"20px",fontWeight:'600'}} variant="h6">Biological Benefits</Typography>
                            <Typography style={{width:"450px",color:"gray"}} variant="body2">Lorem lpsum is simply dummy text of the printing and typesetting </Typography>
                            <div style={{padding:'8px 0'}}>
                                <Typography style={{color:'gray'}} variant="body2">industy. Lorem lpums has been the industry's</Typography>
                            </div>
                        </Box>
                    </Box>
                    <Box style={{display:"flex",paddingTop:"10px",gap:'15px'}}>
                        <img style={{width:'60px'}}  src="https://res.cloudinary.com/dngnlsmso/image/upload/v1766933265/Screenshot_2025-12-28_201716_ujytoj.png"/>
                        <Box>
                            <Typography style={{fontSize:"20px",fontWeight:'600'}} variant="h6">Speciality Product</Typography>
                            <Typography style={{width:"450px",color:"gray"}} variant="body2">Lorem lpsum is simply dummy text of the printing and </Typography>
                            <div style={{padding:'8px 0'}}>
                                <Typography style={{width:"450px",color:"gray"}} variant="body2" >typesetting industry Lorem lpsum has been the industry's</Typography>
                            </div>
                        </Box>
                    </Box>

                </Box>
            </Box>
            
        </div>
       
    )
}
export default ImageFlex;