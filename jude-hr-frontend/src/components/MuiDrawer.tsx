import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from "react";

export const MuiDrawer = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(true)
    return (
        <>
        <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='logo'
            onClick={() => setIsDrawerOpen(true)}
        >
            <MenuIcon />
        </IconButton>
        <Drawer 
            anchor='left'
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}>
            <Box p={2} width='25' textAlign='center' role='presentation'>
                <Typography variant='h6' component='div'>
                    HR Software
                </Typography>
            </Box>
        </Drawer>
        </>)
}