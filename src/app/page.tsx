"use client"
import * as React from "react";
import {useState} from "react";
import {Container , Grid} from "@mui/material"
import UserHeader from "@/components/User/Header";
import Calender from "@/components/Calender";
import { Event } from "@/types";

import Resource from "@/components/Resources";
import Form from "@/components/Form"
import  "./globals.scss"


const Home = () => {
  const [events,setEvents]=useState<Array<Event>>([])
  const [open, setOpen] =useState(false)
  return ( 
    <>
    <Container>
      <Grid>
        <UserHeader />
      </Grid>
      <Grid>
        {!open && <Calender events={events} setOpen={setOpen} />}
        {open && <Form setEvents={setEvents} setOpen={setOpen} />}
        <div className="spacer">
        <Resource />
        </div>
             
      </Grid>
    </Container>
    </>
   );
}
 
export default Home;