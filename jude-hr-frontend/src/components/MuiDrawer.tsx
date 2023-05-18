import { Drawer, Box, AppBar, Stack, Toolbar, Button, Typography, IconButton, ListItem, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import FolderSharedRoundedIcon from '@mui/icons-material/FolderSharedRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import SearchIcon from '@mui/icons-material/Search';
//import '../App.css';
import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
export const MuiDrawer = () => {
  const navigate = useNavigate()
  const itemsList = [
    {
    text: "Dashboard",
    icon: <DashboardRoundedIcon />,
    onClick: () => navigate('AdminDashboard')
    },
    {
      text: "Employees",
      icon: <PersonOutlineRoundedIcon />,
      onClick: () => navigate('/Profiles')
    },
    {
        text: "Recruit and Onboard",
        icon: <PersonAddAltRoundedIcon />,
        onClick: () => navigate('/RecruitAndOnboard')
    },
    {
        text: "Salary and Finance",
        icon: <PaidRoundedIcon />,
        onClick: () => navigate('/SalaryAndFinance')
    },
    {
      text: "Projects",
      icon: <FolderSharedRoundedIcon />,
      onClick: () => navigate('/Projects')
  },
  {
    text: "Sales",
    icon: <TimelineRoundedIcon />,
    onClick: () => navigate('Sales')
    },
    
        {
          text: "Attendance",
          icon: <QueryStatsRoundedIcon />,
          onClick: () => navigate('Attendance')
          },
        {
          text: "Performance",
          icon: <AutoGraphRoundedIcon />,
          onClick: () => navigate('Performance')
          },
        {
          text: "Resignation",
          icon: <ExitToAppRoundedIcon />,
          onClick: () => navigate('Resignation')
          },

        {
          text: "Knowledge Base",
          icon: <MenuBookRoundedIcon />,
          onClick: () => navigate('KnowledgeBase')
          },
        {
          text: "Policies",
          icon: <PolicyRoundedIcon />,
          onClick: () => navigate('Policies')
          },

  ]

    const [isDrawerOpen, setIsDrawerOpen] = useState(true)
    return (
        <>
        
        {/* Navigation Bar */}

        

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HR Software
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <SearchIcon />
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <NotificationsIcon />
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <MessageIcon />
          </IconButton>

          <Button color='inherit'>Sign Out</Button>
        </Toolbar>
      </AppBar>
    </Box>

        {/* Drawer Component */}


        <Drawer 
            sx={{ flexGrow: 1, color: 'success.dark', p: 3 }}
            anchor='left'
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}>
            <Box p={3} width='25' textAlign='center' role='presentation' bgcolor='#1974d2' flex='1' color="#f2f2ed">
                <Typography variant='h6' component='div' color="white">
                    Main
                </Typography>

                <List>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
            <ListItem key={text} onClick={onClick}disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            )
        })}
        </List>
            </Box>
        </Drawer>
        </>)
}