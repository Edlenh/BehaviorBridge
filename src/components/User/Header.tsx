"use client";

import * as React from "react";
import { Avatar, Grid, Button } from "@mui/material";

export default function UserHeader(){
    return(
        <Grid sx={{my: 6}} container alignItems="center">
            <Grid item sx={{mr:4}}>
                <Avatar sx={{width: 115, height: 115, backgroundColor: "#00B4D8"}}>
                    U
                </Avatar>
            </Grid>
            <Grid item>
                <h1>User</h1>
                <p style={{marginBottom: "12px"}}>yourmail@.com</p>
            </Grid>
        </Grid>
    )
}