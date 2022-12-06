import { DarkMode } from "@mui/icons-material";
import { AppBar, FormControlLabel, FormGroup, Switch, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({darkMode, handleThemeChange}: Props) {
    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar>
                <Typography variant="h6">
                    SMARTHOME
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange} color="default"/>
            </Toolbar>
        </AppBar>
    )
}