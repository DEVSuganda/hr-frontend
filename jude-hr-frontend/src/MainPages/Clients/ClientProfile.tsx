import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Stack, Button } from '@mui/material';
import styles from '../../components/myStyles.module.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import AddProjectModal from '../../components/modals/AddProjectModal';
import EmployeeAvatarGroup from '../../components/EmployeeAvatarGroup';
import p1 from '../../assets/EmployeeImages/puff.jpg'
import LinearProgress from '@mui/material/LinearProgress';
import Divider from '@mui/material/Divider';
import EditRoundedIcon from '@mui/icons-material/EditRounded';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  height: 500,
  color: theme.palette.text.secondary,
}));

const ItemMain = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',  
  height: 330,
  width: '100%',
  color: theme.palette.text.secondary,
}));


export default function ClientProfile() {
  return (
    <>
    <div>
    <Box sx={{ flexGrow: 1 }}>


    <Typography className={styles.forTextOnBackground} variant='h6'>Clients</Typography>
      <Box sx={{display: 'flex'}}>
      <Typography className={styles.forMinorTextOnBackground}>Client Profiles</Typography>
      <AddProjectModal/>
      </Box>


      <Grid container wrap='wrap' spacing={2} padding={2}>
        <Grid item xs={12} md={12}>
        <ItemMain className={styles.forRows}>
        <img src={p1} className={styles.forProfilePictures}></img>
        <div className={styles.forInfoSpacing}>
          <Typography className={styles.forInfoBlack} sx={{fontSize: 24, fontFamily: 'Comic Sans MS'}}>Best Technologies</Typography>
          <Typography sx={{fontSize: 14, fontFamily: 'Comic Sans MS'}}>UI/UX Design Team</Typography>
          <Typography sx={{fontSize: 16, fontFamily:'Comic Sans MS', paddingTop: 2}}>Web Designer</Typography>
          <Typography className={styles.forInfoBlack} sx={{fontSize: 18, fontFamily: 'Roboto', paddingTop: 2}}>Employee ID: 559029303</Typography>
          <Typography sx={{fontSize: 16, fontFamily: 'Comic Sans MS', paddingTop: 1}}>Date of Joining: 1st Jan 2020</Typography>
          <div className={styles.forInfoSpacing}>
          <Button sx={{backgroundColor: 'rgb(244, 153, 48)', color: 'white'}}>SEND MESSAGE</Button>
          </div>

          
        </div>

        
        <Divider orientation="vertical" variant="middle" sx={{ borderColor: 'orange', paddingLeft: 25}} flexItem />
        

        <div className={styles.forInfoSpacing3}>
        
        <div className={styles.forRows}><Typography className={styles.forInfoBlack} sx={{fontSize: 16, fontFamily: 'Comic Sans MS', paddingTop: 2}}>Phone:</Typography><Typography className={styles.forInfoBlack} sx={{fontSize: 16, fontFamily: 'Comic Sans MS', paddingLeft: 14, paddingTop: 2}}>0770816537</Typography><div className={styles.forInfoIcon}><EditRoundedIcon></EditRoundedIcon></div></div>
        <div className={styles.forRows}><Typography className={styles.forInfoBlack} sx={{fontSize: 16, fontFamily: 'Comic Sans MS', paddingTop: 2}}>Email:</Typography><Typography sx={{fontSize: 16, fontFamily: 'Comic Sans MS', paddingLeft: 14, paddingTop: 2}}>kengowada@gmail.com</Typography></div>
        <div className={styles.forRows}><Typography className={styles.forInfoBlack} sx={{fontSize: 16, fontFamily:'Comic Sans MS', paddingTop: 2}}>Birthday:</Typography><Typography sx={{fontSize: 16, fontFamily:'Comic Sans MS', paddingLeft: 14, paddingTop: 2}}>24th July</Typography></div>
        <div className={styles.forRows}><Typography className={styles.forInfoBlack} sx={{fontSize: 16, fontFamily: 'Comic Sans MS', paddingTop: 2}}>Address:</Typography><Typography className={styles.forInfoBlack} sx={{fontSize: 16, fontFamily: 'Comic Sans MS', paddingLeft: 14, paddingTop: 2}}>Muyenga</Typography></div>
        <div className={styles.forRows}><Typography className={styles.forInfoBlack} sx={{fontSize: 16, fontFamily: 'Comic Sans MS', paddingTop: 2}}>Gender:</Typography><Typography sx={{fontSize: 16, fontFamily: 'Comic Sans MS', paddingLeft: 14, paddingTop: 2}}>Male</Typography></div>
        
        </div>
        </ItemMain>
        </Grid>
      </Grid>

      {/* After Info */}

      
      <Grid container spacing={2} columns={11} rowSpacing={4} >
        <Grid item xs={5} md={3.5}>
        <Item sx={{ overflow: 'auto' }}>
          <div>
          <Typography className={styles.forContainers1st}>Office Management  <MoreVertIcon /></Typography>  
          
          </div>
          <div>

            <Typography className={styles.forContainers2nd}>10 tasks, 3 tasks completed</Typography>

          </div>

          <div className={styles.forContainers3rd}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates repellendus architecto obcaecati maiores modi error, ipsum suscipit provident qui, non dolore? Tempora deleniti corporis adipisci, atque officia maiores vitae obcaecati.
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Deadline:</Typography>  
          <Typography className={styles.forContainers2nd}>17 apr 2023</Typography>
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Project Leader:</Typography>  
          <Avatar src={p1} sx={{ width: 20, height: 20}} />
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Team:</Typography>  
          <EmployeeAvatarGroup />
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Progress:</Typography>  
          <LinearProgress color="inherit" value={26} variant='determinate' sx={{marginTop: 2}} />
          </div>
        </Item>
        </Grid>





        <Grid item xs={5} md={3.5}>
          <Item sx={{ overflow: 'auto' }}>
          <div>
          <Typography className={styles.forContainers1st}>Office Management  <MoreVertIcon /></Typography>  
          
          </div>
          <div>

            <Typography className={styles.forContainers2nd}>10 tasks, 3 tasks completed</Typography>

          </div>

          <div className={styles.forContainers3rd}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates repellendus architecto obcaecati maiores modi error, ipsum suscipit provident qui, non dolore? Tempora deleniti corporis adipisci, atque officia maiores vitae obcaecati.
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Deadline:</Typography>  
          <Typography className={styles.forContainers2nd}>17 apr 2023</Typography>
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Project Leader:</Typography>  
          <Avatar src={p1} sx={{ width: 20, height: 20}} />
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Team:</Typography>  
          <EmployeeAvatarGroup />
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Progress:</Typography>  
          <LinearProgress color="inherit" value={48} sx={{marginTop: 2}} />
          </div>
          </Item>
        </Grid>





        <Grid item xs={5} md={3.5}>
          <Item sx={{ overflow: 'auto' }}>
          <div>
          <Typography className={styles.forContainers1st}>Office Management  <MoreVertIcon /></Typography>  
          
          </div>
          <div>

            <Typography className={styles.forContainers2nd}>10 tasks, 3 tasks completed</Typography>

          </div>

          <div className={styles.forContainers3rd}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates repellendus architecto obcaecati maiores modi error, ipsum suscipit provident qui, non dolore? Tempora deleniti corporis adipisci, atque officia maiores vitae obcaecati.
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Deadline:</Typography>  
          <Typography className={styles.forContainers2nd}>17 apr 2023</Typography>
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Project Leader:</Typography>  
          <Avatar src={p1} sx={{ width: 20, height: 20}} />
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Team:</Typography>  
          <EmployeeAvatarGroup />
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Progress:</Typography>  
          <LinearProgress color="inherit" value={86} variant='determinate' sx={{marginTop: 2}} />
          </div>
          </Item>
        </Grid>





        <Grid item xs={5} md={3.5}>
          <Item sx={{ overflow: 'auto' }}>
          <div>
          <Typography className={styles.forContainers1st}>Office Management  <MoreVertIcon /></Typography>  
          
          </div>
          <div>

            <Typography className={styles.forContainers2nd}>10 tasks, 3 tasks completed</Typography>

          </div>

          <div className={styles.forContainers3rd}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates repellendus architecto obcaecati maiores modi error, ipsum suscipit provident qui, non dolore? Tempora deleniti corporis adipisci, atque officia maiores vitae obcaecati.
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Deadline:</Typography>  
          <Typography className={styles.forContainers2nd}>17 apr 2023</Typography>
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Project Leader:</Typography>  
          <Avatar src={p1} sx={{ width: 20, height: 20}} />
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Team:</Typography>  
          <EmployeeAvatarGroup />
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Progress:</Typography>  
          <LinearProgress color="inherit" value={88} sx={{marginTop: 2}} />
          </div>
          </Item>
        </Grid>





        <Grid item xs={5} md={3.5}>
          <Item sx={{ overflow: 'auto' }}>
          <div>
          <Typography className={styles.forContainers1st}>Office Management  <MoreVertIcon /></Typography>  
          
          </div>
          <div>

            <Typography className={styles.forContainers2nd}>10 tasks, 3 tasks completed</Typography>

          </div>

          <div className={styles.forContainers3rd}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates repellendus architecto obcaecati maiores modi error, ipsum suscipit provident qui, non dolore? Tempora deleniti corporis adipisci, atque officia maiores vitae obcaecati.
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Deadline:</Typography>  
          <Typography className={styles.forContainers2nd}>17 apr 2023</Typography>
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Project Leader:</Typography>  
          <Avatar src={p1} sx={{ width: 20, height: 20}} />
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Team:</Typography>  
          <EmployeeAvatarGroup />
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Progress:</Typography>  
          <LinearProgress color="inherit" value={50} variant='determinate' sx={{marginTop: 2}} />
          </div>
          </Item>
        </Grid>






        <Grid item xs={5} md={3.5}>
          <Item sx={{ overflow: 'auto'}} >
          <div>
          <Typography className={styles.forContainers1st}>Office Management  <MoreVertIcon /></Typography>  
          
          </div>
          <div>

            <Typography className={styles.forContainers2nd}>10 tasks, 3 tasks completed</Typography>

          </div>

          <div className={styles.forContainers3rd}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates repellendus architecto obcaecati maiores modi error, ipsum suscipit provident qui, non dolore? Tempora deleniti corporis adipisci, atque officia maiores vitae obcaecati.
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Deadline:</Typography>  
          <Typography className={styles.forContainers2nd}>17 apr 2023</Typography>
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Project Leader:</Typography>  
          <Avatar src={p1} sx={{ width: 20, height: 20}} />
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Team:</Typography>  
          <EmployeeAvatarGroup />
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Progress:</Typography>  
          <LinearProgress color="inherit" value={100} variant='determinate' sx={{marginTop: 2}}/>
          </div>
          </Item>
        </Grid>



        
        
      </Grid>
    </Box>
    </div>
    </>
  );
}