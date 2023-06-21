"use client"
import * as React from "react";
import {useState} from "react";
import {Container , Grid} from "@mui/material"
import UserHeader from "@/components/User/Header";
import Calender from "@/components/Calender";

const Home = () => {
  return ( 
    <Container>
      <Grid>
        <UserHeader />
      </Grid>
      <Grid>
        <Calender />
      </Grid>
    </Container>
   );
}
 
export default Home;