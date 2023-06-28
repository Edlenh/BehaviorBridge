"use client";
import * as React from "react";
import { Grid, FormControlLabel, Switch} from "@mui/material";
import {usePathname, useRouter} from "next/navigation";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness6Icon from '@mui/icons-material/Brightness6';

export default function Header({switchTheme} : {switchTheme:any}){
    const pathname = usePathname();
    return (
        <Grid sx={{p:2}}>
            <Grid
            container 
            direction="row"
            justifyContent={pathname ==="/" ?"center": "space-between"}
            alignItems="center">
                <Grid
                item ={true}
                xs={6}
                rowSpacing ={1}
                container
                direction = "row"
                alignItems="center"
                justifyContent="flex-end"
                >
                        <Grid 
                        container
                        direction = "row"
                        alignItems="center"
                        justifyContent="flex-end">
                           <FormControlLabel
                control ={
                    <Switch onChange={switchTheme} name="User" color="primary"
                    icon={<LightModeIcon />}
                    checkedIcon={<DarkModeIcon />}
                    />
                }label={<Brightness6Icon/>}/>
               
                 </Grid>
                 </Grid>
            </Grid>
        </Grid>
    )
}