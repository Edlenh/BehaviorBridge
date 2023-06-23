"use client";
import dayjs from "dayjs"
import CalendarHeatmap from 'react-calendar-heatmap';
import "react-calendar-heatmap/dist/styles.css";
import {Alert, AlertTitle, Button, Grid} from "@mui/material";
import { Event } from "@/types";

type Props ={
    events: Event[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
};

//pass props to the calender
export default function Calendar({events, setOpen}: Props){
    let yearly = dayjs().subtract(365, "days").format("YYYY-MM-DD");
    const formattedEvents = events.map((event)=>({
        ...event,
        //spread through all events
        date: dayjs(event.date).format("YYYY-MM-DD"),
    }))
    return(
        <Grid item className="Calendar" sx={{p:4, border: 3,
         borderColor:"#00B4D8",
         borderRadius: 10,
         borderTopLeftRadius: 1,
         borderBottomRightRadius: 25,
         borderBottom: 12,
          }}>
            <Grid 
            direction="row"
            container 
            item
            justifyContent="space-between"
            alignItems="center"
            justifyItems="center"
            sx={{mb:4}}>
                <h1>Track New Behavior</h1>
                <Button 
                sx={{color: "#00B4D8", borderColor: "#00B4D8"}}
                className="info"
                variant="outlined"
                onClick={()=>setOpen(true)}
                >
                    New
                </Button>
            </Grid>
            <CalendarHeatmap startDate ={yearly}
            showWeekdayLabels
            values={formattedEvents}
            classForValue={(value)=>{
                if(!value){
                    return"color-empty";
                }
                return `primary opacity-${value.count}`;
            }}
            />
            {/* todo: add chatgpt engine to provide recs */}
            <Alert severity="info">
                <AlertTitle>Aba</AlertTitle>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati</span>
                </Alert> 
        </Grid>
    );
};
  
    
  
    
