"use client";
import * as React from "react"
import { Grid } from "@mui/material"
import Image from "next/image";
import bbpic from "../../public/bbpic.svg";
import "../app/globals.scss"


const Landing = () => {
  
    return (
        
        <Grid
        className="Landing"
        container direction="column"
        justifyContent="center"
        alignItems="center">
        <Grid item>
            <h1><span className="title">Bridging the gap</span>  from therapy to daily life</h1>
            <p style={{maxWidth:"800px", lineHeight:"1.45"}}>
                Increase the effectiveness of your child's therapy by 
                keeping track of behaviors in their daily life.
            </p>
            </Grid>
        <Grid item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{py:2}}> </Grid>

        <Grid item ={true}>
            <Image
            style={{
                maxWidth: "700px",
                width: "100%",
                height: "auto",
                margin: "auto",
            }}
            src={bbpic}
            alt= "child surrounded by blobs"/>
        </Grid>
        </Grid>
     );
}
 
export default Landing;

