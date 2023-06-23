
"use client";

import * as React from "react"
import {useState} from "react";
import {Button, TextField, Grid,Alert} from "@mui/material"
import Image from "next/image";
import bbpic from "../../public/bbpic.svg";

import supabase from "../../supabase";

const Landing = () => {
    const [email, setEmail] = useState(null);
    const [loading, setLoading]= useState(false)
    const [success, setSuccess]= useState(false)

    const login = async ()=>{
        if(!email) alert("Please Provide Valid Email")
        try {
            setLoading(true)
            const { data, error } = await supabase.auth.signInWithOtp({
                email,
            })
            if (data) {
                setSuccess(true);
              }
        } catch (error) {
          console.log(error)  
        } finally{
            setLoading(false)
        }
    };
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
        <Grid item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{py:2}}>

{!success && (
          <div>
            <TextField
              sx={{ mr: 2 }}
              size="small"
              label="me@mail.com"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button variant="contained" onClick={login}>
              Signup
            </Button>
          </div>
        )}
             {success && <Alert severity="info">Please check your mailbox.</Alert>}
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

