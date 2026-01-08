import { Button, Checkbox, Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import GridViewIcon from '@mui/icons-material/GridView';
import { CheckBox } from "@mui/icons-material";



const Products =()=>{
  return(
    <div>
      <div style={{padding:"50px 80px"}}>
        <Grid container spacing={2}>
          <Grid size={3}>
              <Paper style={{border:"0.1rem solid gray" , borderRadius:"2px" ,backgroundColor:"lightgray" , marginBottom:"30px"}}>
                  <Typography style={{fontWeight:600 , padding:"10px 0" , textAlign:"center"}} variant="h6">Filter Products by</Typography>
              </Paper>
              <Paper style={{border:'0.1rem solid gray', padding:"0 12px"}}>
                <div>
                    <Checkbox />Clothes
                </div>

              </Paper>
          </Grid>
          <Grid size={9} style={{border:"0.1rem solid red"}}>
            <div style={{paddingBottom:"30px"}}>
                <Paper style={{border:"0.1rem solid skyblue" , borderRadius:"5px" ,backgroundColor:"skyblue"}}>
                    <Button> <GridViewIcon /> </Button>
                </Paper>
            </div>
            <Grid container spacing={2}>
              <Grid size={4} style={{border:"0.1rem solid green"}}>
                display content grid 2
              </Grid>
               <Grid size={4} style={{border:"0.1rem solid green"}}>
                display content grid 2
              </Grid>
               <Grid size={4} style={{border:"0.1rem solid green"}}>
                display content grid 2
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}


export default Products;