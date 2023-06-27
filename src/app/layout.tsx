"use client";
// import { Metadata } from 'next'
import './globals.scss'
import React, {useState} from "react";
import { lightTheme, darkTheme } from './theme/theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import Header from "@/components/Header"
import Landing from '@/components/Landing';
import {Button} from "@mui/material"

//todo fix this metadata error

// export const metadata: Metadata = {
//   title: 'Behavior Bridge',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  //state for logged in users
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  //state for dark and light themes
  const [isDark, setIsDark] = useState(false);
    const switchTheme: any= ()=>{
      setIsDark(!isDark);
    };
    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  
    return (
      <html lang="en">
        
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          {/* localizationprovider helps with setting date and time  */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            
            <CssBaseline />
            
            <body>
              <Header switchTheme={switchTheme} />
             
              {!isLoggedIn ? (
                <div className='landingLogin'>
                  <Landing/>
                  <Button className='landingButton' variant="contained" onClick={handleLogin}>
                    Login
                  </Button>
                </div>
              ) : (
                children
              )}
             
              
            </body>
          </LocalizationProvider>
        </ThemeProvider>
    
      </html>
    );
  };
  
