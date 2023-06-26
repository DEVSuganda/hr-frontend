import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Stack, Button } from '@mui/material';
import styles from '../../components/myStyles.module.css'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import client from '../../assets/EmployeeImages/client.jpg'
import AddIcon from '@mui/icons-material/Add';
import AddClientModal from '../../components/modals/AddClientModal';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  alignItems: 'center',
  justifyContent: 'center',
  height: 250,
  color: theme.palette.text.secondary,
  alignContent: 'center',
  display: 'flex',
  flexDirection: 'column'
  
}));


// // const getProfileImage = () =>{
//         to be done later
// // }

export default function Clients() {
  return (
    <>
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Typography className={styles.forTextOnBackground} variant='h6'>Clients</Typography>
      <Box sx={{display: 'flex'}}>
      <Typography className={styles.forMinorTextOnBackground}>Client Profiles</Typography>
      <AddClientModal />
      </Box>
      <Grid container spacing={2} columns={11} rowSpacing={4} >
        <Grid item xs={5} md={3.5}>
        <Item>
        <img src={client} className={styles.forProfilePictures}></img>
          <Typography className={styles.forMainText}>Name</Typography>
          <Typography className={styles.forMinorMainText}>Company Information</Typography>
        </Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
          <Item>
          <img src={client} className={styles.forProfilePictures}></img>
          <Typography className={styles.forMainText}>Name</Typography>
          <Typography className={styles.forMinorMainText}>Company Information</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
          <Item>
          <img src={client} className={styles.forProfilePictures}></img>
          <Typography className={styles.forMainText}>Name</Typography>
          <Typography className={styles.forMinorMainText}>Company Information</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
          <Item>
          <img src={client} className={styles.forProfilePictures}></img>
          <Typography className={styles.forMainText}>Name</Typography>
          <Typography className={styles.forMinorMainText}>Company Information</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
          <Item>
          <img src={client} className={styles.forProfilePictures}></img>
          <Typography className={styles.forMainText}>Name</Typography>
          <Typography className={styles.forMinorMainText}>Company Information</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
          <Item>
          <img src={client} className={styles.forProfilePictures}></img>
          <Typography className={styles.forMainText}>Name</Typography>
          <Typography className={styles.forMinorMainText}>Company Information</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
          <Item>
          <img src={client} className={styles.forProfilePictures}></img>
          <Typography className={styles.forMainText}>Name</Typography>
          <Typography className={styles.forMinorMainText}>Company Information</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
          <Item>
          <img src={client} className={styles.forProfilePictures}></img>
          <Typography className={styles.forMainText}>Name</Typography>
          <Typography className={styles.forMinorMainText}>Company Information</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
          <Item>

          <img src={client} className={styles.forProfilePictures}></img>
          <Typography className={styles.forMainText}>Name</Typography>
          <Typography className={styles.forMinorMainText}>Company Information</Typography>

          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
    </>
  );
}