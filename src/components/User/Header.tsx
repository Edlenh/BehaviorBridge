"use client";

import * as React from "react";
import { Grid, Button } from "@mui/material";

import { useRouter } from "next/navigation";

export default function UserHeader(){
    const router = useRouter()
 
    
    return(
        <Grid sx={{my: 6}} container alignItems="center">
            <Grid item sx={{mr:4}}>
              
            </Grid>
            <Grid item>
               
               
                {/* <Button>Sign Out</Button> */}
            </Grid>
           
        </Grid>
    )
}