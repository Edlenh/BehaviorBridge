"use client";
import dayjs from "dayjs";
import config from "../../config" 
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Grid,
  Slider,
  Stack,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  Alert,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Event } from "@/types";
import { LoadingButton } from "@mui/lab";


type Props = {
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Form({ setEvents, setOpen }: Props) {
  const [state, setState] = useState<any>({
    loading: false,
    error: undefined});
  const [loading, setLoading] = useState<boolean>(false); 
  const [error, setError] = useState<string | null>(null)
  const [event, setEvent] = useState<Event>({
    user_id:undefined,
    date: undefined,
    duration: 1,
    locations: [],
    symptoms: [],
    medications: [],
    count: 0,
  });

const handleChange = (index: number, key: keyof Event)=>{
    if(event[key].includes(index)){
        setEvent(()=> ({
            ...event,
            [key]: event[key].filter((x:number) => x!== index),
        }));
        return;
    }
    setEvent(()=>({
        ...event,
        [key]: [...event[key], index],
    }));
}
  const saveEvent= ()=> {
    setState({...state, error: undefined});
    if(!event.date){
        setState({...state,error:"Please enter valid date"});
        return;
    }
    try{
        setState({...state, loading: true});
        setEvents((prevEvents)=> [...prevEvents,event]);
        setOpen(false);
    } catch(error){
        console.log(error)
    } finally{
        setState({...state, loading: false})
    }
  }

  useEffect(()=>{
    console.log(event);
  }, [event])

  useEffect(()=>{
    setEvent({ ...event, date: dayjs().format()})
  }, [])
  return (
    <Card
      variant="outlined"
      sx={{ minWidth: 275, maxWidth: 600, mx: "auto", px: 2, py: 1, my: 2 }}
    >
      <CardContent>
        <Grid sx={{ mb: 3 }}>
          <h2>Track Behavior</h2>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <p>Date / Time</p>
            <DateTimePicker
              label="Date & time"
              onChange={(newValue) =>
                setEvent({
                  ...event,
                  date: dayjs().format()
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <p>How long did it last?</p>
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <span>0</span>
              <Slider
                defaultValue={1}
                step={1}
                min={0}
                max={72}
                valueLabelDisplay="auto"
                onChange={(e) => {
                  const inputElement = e.target as HTMLInputElement;
                  setEvent({
                    ...event,
                    duration: parseInt(inputElement.value),
                  });
                }}
              />
              <span>24</span>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <p>Record Severity (from 0 to 10)</p>
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <span>0</span>
              <Slider
                defaultValue={1}
                step={1}
                marks
                min={0}
                max={10}
                valueLabelDisplay="auto"
                onChange={(e) => {
                  const inputElement = e.target as HTMLInputElement;
                  setEvent({
                    ...event,
                    count: parseInt(inputElement.value),
                  });
                }}
              />
              <span>10</span>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <p>Symptoms</p>
            <Grid>
              {config.symptoms.map((x, y) => (
                <FormControlLabel
                  key={y}
                  control={
                    <Checkbox
                      name={x}
                      checked={event.symptoms.includes(y)}
                      onChange={() => handleChange(y, "symptoms")}
                    />
                  }
                  label={x}
                />
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <p>Location</p>
            <Grid>
              {config.locations.map((x, y) => (
                <FormControlLabel
                  key={y}
                  control={
                    <Checkbox
                      name={x}
                      checked={event.locations.includes(y)}
                      onChange={() => handleChange(y, "locations")}
                    />
                  }
                  label={x}
                />
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <p>Medications</p>
            <Grid>
              {config.medications.map((x, y) => (
                <FormControlLabel
                  key={y}
                  control={
                    <Checkbox
                      name={x}
                      checked={event.medications.includes(y)}
                      onChange={() => handleChange(y, "medications")}
                    />
                  }
                  label={x}
                />
              ))}
            </Grid>
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Alert severity="error" color="error">
                {error || "Error"}
              </Alert>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              disabled={loading}
              style={{ marginRight: "6px" }}
              variant="outlined"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              disabled={loading}
              variant="contained"
              color="primary"
              onClick={saveEvent}
            >
              Save
            </Button>
            {loading && <LoadingButton loading />}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}