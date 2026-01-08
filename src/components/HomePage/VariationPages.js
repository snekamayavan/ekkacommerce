import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';



const VariationPages = () =>{

   
    return(
        <div style={{padding:'60px 80px'}}>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <Typography style={{width:"500px",fontweight:"700"}} variant="h4">Find frequently asked questions and important information about us</Typography>
                    <div>
                         <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography style={{color:"black"}} variant="h6">There are many Variation of Passages of Lorem Ipsum available,</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                Contrary to popular belief, Lorem Ipsum is not simply random text, it has roots in a piece of classical Latin literature from 45 BC making it over 2000 years old.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div style={{padding:"20px 0"}}>
                         <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography style={{color:"black"}} variant="h6">There are many Variation of Passages of Lorem Ipsum available</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                Contrary to popular belief, Lorem Ipsum is not simply random text, it has roots in a piece of classical Latin literature from 45 BC making it over 2000 years old.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div style={{padding:"20px 0"}}>
                         <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography style={{color:"black"}} variant="h6">There are many Variation of Passages of Lorem Ipsum available</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                Contrary to popular belief, Lorem Ipsum is not simply random text, it has roots in a piece of classical Latin literature from 45 BC making it over 2000 years old.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </Grid>
                <Grid size={6}>
                    <div style={{display:"flex" , justifyContent:"space-between" , position:"relative"}}>
                        <div>
                            <img style={{position:"absolute" , left:"60px" , top:"120px" , borderRadius:'12px' , border:"0.6rem solid white"}} src="https://res.cloudinary.com/dngnlsmso/image/upload/v1767600960/Screenshot_2026-01-05_134325_x51xao.png"/>
                        </div>
                         <div>
                            <img style={{width:'300px',height:'350px',borderRadius:"10px"}} src="https://res.cloudinary.com/dngnlsmso/image/upload/v1767601859/young-woman-supermarket-with-vegetables-fruits-buying-groceries_169016-19950_adinxo.jpg"/>
                        </div>
                    </div>
                   
                </Grid>
            </Grid>
            
                
        </div>
    )

}
export default VariationPages;