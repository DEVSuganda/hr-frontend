import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import "../Styles/NavBarStyle.css";
import MenuIcon from '@mui/icons-material/Menu'
function Navbar() {
	return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label="logo">
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" component='div'>
                    HR App
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;