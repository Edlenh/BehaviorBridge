"use client";

import * as React from "react";
import { Avatar, Grid, Button } from "@mui/material";

import { useRouter } from "next/navigation";

export default function UserHeader(){
    const router = useRouter()
 
    
    return(
        <Grid sx={{my: 6}} container alignItems="center">
            <Grid item sx={{mr:4}}>
                <Avatar sx={{width: 115, height: 115, backgroundColor: "#00B4D8"}}>
                    U
                </Avatar>
            </Grid>
            <Grid item>
                <h1>Hello</h1>
                <p style={{marginBottom: "12px"}}>You</p>
                <Button>Sign Out</Button>
            </Grid>
           
        </Grid>
    )
}