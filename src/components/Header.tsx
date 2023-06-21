"use client";
import * as React from "react";
import {Avatar, Grid, Button, Switch, FormControlLabel} from "@mui/material";
import {usePathname, useRouter} from "next/navigation";
import Diversity1Icon from '@mui/icons-material/Diversity1';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness6Icon from '@mui/icons-material/Brightness6';

export default function Header({ switchTheme} : {switchTheme: any}){
    const pathname = usePathname();
    const router = useRouter();
    return (
        <Grid sx={{p:2}}>
            <Grid
            container 
            direction="row"
            justifyContent={pathname ==="/" ?"center": "space-between"}
            alignItems="center">
                <Grid item lg={6}>
                    <h1><Diversity1Icon 
                    sx={{fontSize: 50,
                    mt:1,
                    }}/></h1>
                    </Grid>
                <Grid
                xs={6}
                rowSpacing ={1}
                container
                direction = "row"
                alignItems="center"
                justifyContent="flex-end"
                >
                <FormControlLabel
                control ={
                    <Switch onChange={switchTheme} name="Ed" color="primary"
                    icon={<LightModeIcon />}
                    checkedIcon={<DarkModeIcon />}
                    />
                }label={<Brightness6Icon/>}/>
                <Avatar
                    className="pointer"
                    onClick ={() => router.push("/profile")}
                    sx={{width: 56, height: 56, backgroundColor:"#00B4D8"}}>
                    E
                    </Avatar>
                 </Grid>
            </Grid>
        </Grid>
    )
}