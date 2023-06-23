"use client";

import * as React from "react";
import { Avatar, Grid, Button } from "@mui/material";
import { useAuthContext } from "@/app/context";
import { useRouter } from "next/navigation";

export default function UserHeader(){
    const router = useRouter()
    const {user, signOut} = useAuthContext();
    const logout = ()=>{
        signOut();
        router.push("/");
    }
    return(
        <Grid sx={{my: 6}} container alignItems="center">
            <Grid item sx={{mr:4}}>
                <Avatar sx={{width: 115, height: 115, backgroundColor: "#00B4D8"}}>
                    U
                </Avatar>
            </Grid>
            {user && (
            <Grid item>
                <h1>{user.email}</h1>
                <p style={{marginBottom: "12px"}}>{user.email}</p>
                <Button onClick={logout}>Sign Out</Button>
            </Grid>
            )}
        </Grid>
    )
}