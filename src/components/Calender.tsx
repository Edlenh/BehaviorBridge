"use client";

import dayjs from "dayjs"
import CalendarHeatmap from 'react-calendar-heatmap';
import "react-calendar-heatmap/dist/styles.css";

export default function Calender(){
    let yearly = dayjs().subtract(365, "days").format("YYYY-MM-DD");
    return<CalendarHeatmap startDate ={yearly} values={[]}/>
}
  
    
