"use client";

import { createTheme } from "@mui/material/styles"

export const darkTheme = createTheme({
    palette:{
        mode: "dark",
        primary: {
            main: "#0077B6"
        },
    },
});
export const lightTheme = createTheme({
    palette:{
        mode: "light",
        primary: {
            main: "#90E0EF"
        },
    },
});