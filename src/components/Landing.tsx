"use client";
import * as React from "react"
import {Button, TextField, Grid,Alert} from "@mui/material"
import Image from "next/image";
import bbpic from "../../public/bbpic.svg";
import BasicCard from "./Card";

const Landing = () => {
  
    return (
        
        <Grid
        className="Landing"
        container direction="column"
        justifyContent="center"
        alignItems="center">
        <Grid item>
            <h1>Bridging the gap from therapy to daily life</h1>
            <p style={{maxWidth:"800px", lineHeight:"1.45"}}>
                Increase the effectiveness of your child's therapy by 
                keeping track of behaviors in their daily life.
            </p>
            </Grid>

        <BasicCard />

        <Grid item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{py:2}}>

          <div>
            <TextField
              sx={{ mr: 2 }}
              size="small"
              label="me@mail.com"
              variant="outlined"
            />
            <Button variant="contained">
              Signup / Login
            </Button>
          </div>

        </Grid>

        <Grid item ={true}>
            <Image
            style={{
                maxWidth: "700px",
                width: "100%",
                height: "auto",
                margin: "auto",
            }}
            src={bbpic}
            alt= "child surrounded by blobs"
            className="pointer"/>
        </Grid>
        </Grid>
     );
}
 
export default Landing;

