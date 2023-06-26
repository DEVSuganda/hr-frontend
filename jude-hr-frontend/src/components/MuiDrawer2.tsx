import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import puff from '../assets/EmployeeImages/puff.png'
//before
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//after
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
import { Route, Routes, useNavigate } from 'react-router-dom';
import styles from '../components/myStyles.module.css'


//routes
import Holidays from "../MainPages/Employees/Holidays";
import Onboard from "../MainPages/Employees/Onboard";
import Profiles from "../MainPages/Employees/Profiles";
import AdminDashboard from "../MainPages/Dashboard/AdminDashboard";
import EmployeeDashboard from "../MainPages/Dashboard/EmployeeDashboard";
import KnowledgeBase from "../MainPages/KnowledgeBase/KnowledgeBase";
import Performance from "../MainPages/Performance/Performance";
import Assets from "../MainPages/Assets/Assets";
import Projects from "../MainPages/Projects/Projects";
import Clients from "../MainPages/Clients/Clients";
import Resignation from "../MainPages/Resignation/Resignation";
import SalaryAndFinance from "../MainPages/SalaryAndFinance/SalaryAndFinance";
import Sales from "../MainPages/Sales/Sales";
import Attendance from "../MainPages/Attendance/Attendance";
import Login from "../MainPages/Authentication/Login";
import style from '../App.css';

const drawerWidth = 240;





const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),


  // necessary for content to be below app bar


  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MuiDrawer2() {
  const navigate = useNavigate();

  //items list
const itemsList = [
  {
  text: "Dashboard",
  icon: <DashboardRoundedIcon className={styles.forIcons}></DashboardRoundedIcon>,
  onClick: () => navigate('AdminDashboard')
  },
  {
    text: "Employees",
    icon: <PersonOutlineRoundedIcon className={styles.forIcons}></PersonOutlineRoundedIcon>,
    onClick: () => navigate('/Profiles')
    
  },
  {
      text: "Clients",
      icon: <PersonAddAltRoundedIcon className={styles.forIcons}></PersonAddAltRoundedIcon>,
      onClick: () => navigate('/Clients')
  },
  {
      text: "Salary and Finance",
      icon: <PaidRoundedIcon className={styles.forIcons}></PaidRoundedIcon>,
      onClick: () => navigate('/SalaryAndFinance')
  },
  {
    text: "Projects",
    icon: <FolderSharedRoundedIcon className={styles.forIcons}></FolderSharedRoundedIcon>,
    onClick: () => navigate('/Projects')
},
{
  text: "Sales",
  icon: <TimelineRoundedIcon className={styles.forIcons}></TimelineRoundedIcon>,
  onClick: () => navigate('Sales')
  },
  
      {
        text: "Attendance",
        icon: <QueryStatsRoundedIcon className={styles.forIcons}></QueryStatsRoundedIcon>,
        onClick: () => navigate('Attendance')
        },
      {
        text: "Performance",
        icon: <AutoGraphRoundedIcon className={styles.forIcons}></AutoGraphRoundedIcon>,
        onClick: () => navigate('Performance')
        },
      {
        text: "Resignation",
        icon: <ExitToAppRoundedIcon className={styles.forIcons}></ExitToAppRoundedIcon>,
        onClick: () => navigate('Resignation')
        },

      {
        text: "Knowledge Base",
        icon: <MenuBookRoundedIcon className={styles.forIcons}></MenuBookRoundedIcon>,
        onClick: () => navigate('KnowledgeBase')
        },
      {
        text: "Assets",
        icon: <PolicyRoundedIcon className={styles.forIcons}></PolicyRoundedIcon>,
        onClick: () => navigate('Assets')
        },

]


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className={styles.forAppBar}>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 2,
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1}}>
          <img src={puff} className={styles.forLogo}></img> DEVSUganda
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
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className={styles.forDrawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className={styles.forDrawerBackground}>
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
      </Drawer>


      <main className={styles.mainbody}>
          
          <Routes>
      <Route path="Holidays" element={<Holidays />}></Route>
      <Route path="Onboard" element={<Onboard />}></Route>
      <Route path="Profiles" element={<Profiles />}></Route>
      <Route path="AdminDashboard" element={<AdminDashboard />}></Route>
      <Route path="EmployeeDashboard" element={<EmployeeDashboard />}></Route>
      <Route path="KnowledgeBase" element={<KnowledgeBase />}></Route>
      <Route path="Performance" element={<Performance />}></Route>
      <Route path="Assets" element={<Assets />}></Route>
      <Route path="Projects" element={<Projects />}></Route>
      <Route path="Clients" element={<Clients />}></Route>
      <Route path="Resignation" element={<Resignation />}></Route>
      <Route path="SalaryAndFinance" element={<SalaryAndFinance />}></Route>
      <Route path="Sales" element={<Sales />}></Route>
      <Route path="Attendance" element={<Attendance />}></Route>
      
      </Routes>
        </main>
    </Box>
    
  );
}