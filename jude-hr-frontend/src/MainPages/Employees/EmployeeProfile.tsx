import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Stack, Button } from '@mui/material';
import styles from '../../components/myStyles.module.css'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import p1 from '../../assets/EmployeeImages/kengo.jpg'
import '../../App.css'
import Divider from '@mui/material/Divider';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',  
  height: 350,
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

export default function EmployeeProfile() {
  return (
    <>
    <div>
    <Box sx={{ flexGrow: 1 }}>


    <Typography className={styles.forTextOnBackground} variant='h6'>Profile</Typography>
      <Box sx={{display: 'flex'}}>
      <Typography className={styles.forMinorTextOnBackground}>Profile</Typography>
      
      </Box>


      
      
      <Grid container wrap='wrap' spacing={2} padding={2}>
        <Grid item xs={12} md={12}>
        <ItemMain className={styles.forRows}>
        <img src={p1} className={styles.forProfilePictures}></img>
        <div className={styles.forInfoSpacing}>
          <Typography className={styles.forInfoBlack} sx={{fontSize: 24}}>Kengo Wada</Typography>
          <Typography sx={{fontSize: 14}}>UI/UX Design Team</Typography>
          <Typography sx={{fontSize: 16, paddingTop: 2}}>Web Designer</Typography>
          <Typography sx={{fontSize: 16, paddingTop: 2}}>Employee ID: 559029303</Typography>
          <Typography sx={{fontSize: 16, paddingTop: 1}}>Date of Joining: 1st Jan 2020</Typography>
          <div className={styles.forInfoSpacing}>
          <Button sx={{backgroundColor: 'rgb(24, 210, 185)', color: 'white', ":hover": {color: 'gray'}}}>SEND MESSAGE</Button>
          </div>

          
        </div>

        
        <Divider orientation="vertical" variant="middle" sx={{ borderColor: 'orange', paddingLeft: 25}} flexItem />
        

        <div className={styles.forInfoSpacing3}>
        
        <div className={styles.forRows}><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingTop: 2}}>Phone:</Typography><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingLeft: 14, paddingTop: 2}}>0770816537</Typography><div className={styles.forInfoIcon}><EditRoundedIcon></EditRoundedIcon></div></div>
        <div className={styles.forRows}><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingTop: 2}}>Email:</Typography><Typography sx={{fontSize: 16, paddingLeft: 14, paddingTop: 2}}>kengowada@gmail.com</Typography></div>
        <div className={styles.forRows}><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingTop: 2}}>Birthday:</Typography><Typography sx={{fontSize: 16, paddingLeft: 14, paddingTop: 2}}>24th July</Typography></div>
        <div className={styles.forRows}><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingTop: 2}}>Address:</Typography><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingLeft: 14, paddingTop: 2}}>Muyenga</Typography></div>
        <div className={styles.forRows}><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingTop: 2}}>Gender:</Typography><Typography sx={{fontSize: 16, paddingLeft: 14, paddingTop: 2}}>Male</Typography></div>
        
        </div>
        </ItemMain>
        </Grid>
      </Grid>



        
        {/* first div */}


    <Grid container spacing={2} padding={2}>
        <Grid item xs={6} md={6}>

          <Item>
            <Typography sx={{fontSize: 18}}>
              Personal Information
            </Typography>

            
      
      
        
        <div className={styles.forRows}><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingTop: 2}}>Passport No:</Typography><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingLeft: 14, paddingTop: 2}}>0770816537</Typography></div>
        <div className={styles.forRows}><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingTop: 2}}>nationality:</Typography><Typography sx={{fontSize: 16, paddingLeft: 14, paddingTop: 2}}>kengowada@gmail.com</Typography></div>
        <div className={styles.forRows}><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingTop: 2}}>Religion:</Typography><Typography sx={{fontSize: 16, paddingLeft: 14, paddingTop: 2}}>24th July</Typography></div>
        <div className={styles.forRows}><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingTop: 2}}>Marital Status:</Typography><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingLeft: 14, paddingTop: 2}}>Muyenga</Typography></div>
        <div className={styles.forRows}><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingTop: 2}}>Next of Kin:</Typography><Typography sx={{fontSize: 16, paddingLeft: 14, paddingTop: 2}}>Male</Typography></div>
        
      

      
      
          </Item>
        </Grid>



      {/* second div */}

        <Grid item xs={6} md={6}>
        <Item>
            <Typography>
              Account Information
            </Typography>

            
      
      
        
        <div className={styles.forRows}><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingTop: 2}}>Account Name:</Typography><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingLeft: 14, paddingTop: 2}}>Kengo Wada</Typography></div>
        <div className={styles.forRows}><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingTop: 2}}>Account Number:</Typography><Typography sx={{fontSize: 16, paddingLeft: 14, paddingTop: 2}}>7657645346</Typography></div>
        <div className={styles.forRows}><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingTop: 2}}>Bank Name:</Typography><Typography sx={{fontSize: 16, paddingLeft: 14, paddingTop: 2}}>Centenary Bank</Typography></div>
        <div className={styles.forRows}><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingTop: 2}}>Swift Code:</Typography><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingLeft: 14, paddingTop: 2}}>6768</Typography></div>
        <div className={styles.forRows}><Typography className={styles.forInfoBlack} sx={{fontSize: 16, paddingTop: 2}}>Bank Address:</Typography><Typography sx={{fontSize: 16, paddingLeft: 14, paddingTop: 2}}>Kabalagala</Typography></div>
        
      

      
      
          </Item>
        </Grid>



      {/* third div */}

        


        
        
      </Grid>
    </Box>
    </div>
    </>
  );
}