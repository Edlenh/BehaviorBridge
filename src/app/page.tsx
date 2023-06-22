"use client"
import * as React from "react";
import {useState} from "react";
import {Container , Grid} from "@mui/material"
import UserHeader from "@/components/User/Header";
import Calender from "@/components/Calender";
import { Event } from "@/types";

const Home = () => {
  const [events,setEvents]=useState<Array<Event>>([])
  const [open, setOpen] =useState(false)
  return ( 
    <Container>
      <Grid>
        <UserHeader />
      </Grid>
      <Grid>
        <Calender events={events} setOpen={setOpen}/>
      </Grid>
    </Container>
   );
}
 
export default Home;