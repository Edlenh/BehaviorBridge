"use client";
import * as React from "react";
import {Avatar, Grid, Button, Switch, FormControlLabel} from "@mui/material";
import {usePathname, useRouter} from "next/navigation";
import Diversity1Icon from '@mui/icons-material/Diversity1';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useAuthContext } from "@/app/context";

export default function Header({ switchTheme, user} : {switchTheme: any; user: any;}){
    // const {user} = useAuthContext()
    const pathname = usePathname();
    const router = useRouter();
    const firstLetter = ()=>{
        if(!user) return "A";
        return user.email[0];
    }
    return (
        <Grid sx={{p:2}}>
            <Grid
            container 
            direction="row"
            justifyContent={pathname ==="/" ?"center": "space-between"}
            alignItems="center">
                <Grid item ={true} lg={6}>
                    <Diversity1Icon 
                    sx={{fontSize: 50,
                    mt:1,
                    }}
                    />
                    </Grid>
                <Grid
                item ={true}
                xs={6}
                rowSpacing ={1}
                container
                direction = "row"
                alignItems="center"
                justifyContent="flex-end"
                >
                    {user &&(
                        <Grid 
                        container
                        direction = "row"
                        alignItems="center"
                        justifyContent="flex-end">
                <FormControlLabel
                control ={
                    <Switch onChange={switchTheme} name="Ed" color="primary"
                    icon={<LightModeIcon />}
                    checkedIcon={<DarkModeIcon />}
                    />
                }label={<LightModeIcon/>}/>
                <Avatar
                    className="pointer"
                    onClick ={() => router.push("/profile")}
                    sx={{width: 56, height: 56, backgroundColor:"#00B4D8", textTransform:"capitalize"}}>
                    {firstLetter()}
                    </Avatar>
                 </Grid>)}
                 </Grid>
            </Grid>
        </Grid>
    )
}