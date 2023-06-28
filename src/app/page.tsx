"use client"
import * as React from "react";
import {useState} from "react";
import {Container , Grid} from "@mui/material"
import Calender from "@/components/Calender";
import { Event } from "@/types";
import AiChat from "../components/Ai";
import Resource from "@/components/Resources";
import Form from "@/components/Form"
import  "./globals.scss"


const Home = () => {
  const [events,setEvents]=useState<Array<Event>>([])
  const [open, setOpen] =useState(false)
  return ( 
    <>
<Container>
{open ? (
<Grid>
<Form setEvents={setEvents} setOpen={setOpen} />
</Grid>
) : (
<Grid>
<AiChat />
<div className="spacer"></div>
<Calender events={events} setOpen={setOpen} />
<div className="spacer"></div>
<Resource />
</Grid>
)}
</Container>
</>
   );
}
 
export default Home;