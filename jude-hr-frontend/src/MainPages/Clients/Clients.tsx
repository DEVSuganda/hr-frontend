import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Stack, Button } from '@mui/material';
import styles from '../../components/myStyles.module.css'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import cli from '../../assets/EmployeeImages/cli.jpg'
import AddIcon from '@mui/icons-material/Add';
import AddClientModal from '../../components/modals/AddClientModal';
import { Route, Routes, useNavigate } from 'react-router-dom'; 
import SearchBar from '../../components/SearchBar';


//cli pics

import cli1 from '../../assets/EmployeeImages/client1.jpg'
import cli2 from '../../assets/EmployeeImages/client2.jpg'
import cli3 from '../../assets/EmployeeImages/client3.jpg'
import cli4 from '../../assets/EmployeeImages/client4.jpg'
import cli5 from '../../assets/EmployeeImages/client5.jpg'
import cli6 from '../../assets/EmployeeImages/client6.jpg'
import cli7 from '../../assets/EmployeeImages/client7.jpg'
import cli8 from '../../assets/EmployeeImages/client8.jpg'
import cli9 from '../../assets/EmployeeImages/client9.jpg'
import cli10 from '../../assets/EmployeeImages/client10.jpg'
import cli11 from '../../assets/EmployeeImages/client11.jpg'
import cli12 from '../../assets/EmployeeImages/client12.jpg'
import cli13 from '../../assets/EmployeeImages/client13.jpg'
import cli14 from '../../assets/EmployeeImages/client14.jpg'
import cli15 from '../../assets/EmployeeImages/client15.jpg'
import cli16 from '../../assets/EmployeeImages/client16.jpg'
import cli17 from '../../assets/EmployeeImages/client17.jpg'
import cli18 from '../../assets/EmployeeImages/client18.jpg'
import cli19 from '../../assets/EmployeeImages/client19.jpg'
import cli20 from '../../assets/EmployeeImages/client20.jpg'


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

  const navigate = useNavigate();
  return (
    <>
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Typography className={styles.forTextOnBackground} variant='h6'>Clients</Typography>
      <Box sx={{display: 'flex', alignItems:'center'}}>
      <Typography className={styles.forMinorTextOnBackground}>Client Profiles</Typography>
      
      <SearchBar/>
      <AddClientModal />
      </Box>
      <Grid container spacing={2} columns={11} rowSpacing={4} paddingLeft={10}>
        <Grid item xs={5} md={2.5}>
        <Item>
        <img src={cli1} className={styles.forProfilePictures} onClick={() => navigate('/ClientProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Sam Owner</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>(CEO) Abs Limited</Typography>
        </Item>
        </Grid>
        <Grid item xs={5} md={2.5}>
          <Item>
          <img src={cli2} className={styles.forProfilePictures} onClick={() => navigate('/ClientProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Sam Owner</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>(CEO) Abs Limited</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={2.5}>
          <Item>
          <img src={cli3} className={styles.forProfilePictures} onClick={() => navigate('/ClientProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Sam Owner</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>(CEO) Abs Limited</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={2.5}>
          <Item>
          <img src={cli4} className={styles.forProfilePictures} onClick={() => navigate('/ClientProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Sam Owner</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>(CEO) Abs Limited</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={2.5}>
          <Item>
          <img src={cli5} className={styles.forProfilePictures} onClick={() => navigate('/ClientProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Sam Owner</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>(CEO) Abs Limited</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={2.5}>
          <Item>
          <img src={cli6} className={styles.forProfilePictures} onClick={() => navigate('/ClientProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Sam Owner</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>(CEO) Abs Limited</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={2.5}>
          <Item>
          <img src={cli7} className={styles.forProfilePictures} onClick={() => navigate('/ClientProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Sam Owner</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>(CEO) Abs Limited</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={2.5}>
          <Item>
          <img src={cli8} className={styles.forProfilePictures} onClick={() => navigate('/ClientProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Sam Owner</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>(CEO) Abs Limited</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={cli9} className={styles.forProfilePictures} onClick={() => navigate('/ClientProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Sam Owner</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>(CEO) Abs Limited</Typography>

          </Item>
        </Grid>


        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={cli10} className={styles.forProfilePictures} onClick={() => navigate('/ClientProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Sam Owner</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>(CEO) Abs Limited</Typography>

          </Item>
        </Grid>


        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={cli11} className={styles.forProfilePictures} onClick={() => navigate('/ClientProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Sam Owner</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>(CEO) Abs Limited</Typography>

          </Item>
        </Grid>


        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={cli12} className={styles.forProfilePictures} onClick={() => navigate('/ClientProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Sam Owner</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>(CEO) Abs Limited</Typography>

          </Item>
        </Grid>


        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={cli13} className={styles.forProfilePictures} onClick={() => navigate('/ClientProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Sam Owner</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>(CEO) Abs Limited</Typography>

          </Item>
        </Grid>


        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={cli14} className={styles.forProfilePictures} onClick={() => navigate('/ClientProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Sam Owner</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>(CEO) Abs Limited</Typography>

          </Item>
        </Grid>


        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={cli15} className={styles.forProfilePictures} onClick={() => navigate('/ClientProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Sam Owner</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>(CEO) Abs Limited</Typography>

          </Item>
        </Grid>


        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={cli16} className={styles.forProfilePictures} onClick={() => navigate('/ClientProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Sam Owner</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>(CEO) Abs Limited</Typography>

          </Item>
        </Grid>


        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={cli17} className={styles.forProfilePictures} onClick={() => navigate('/ClientProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Sam Owner</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>(CEO) Abs Limited</Typography>

          </Item>
        </Grid>


        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={cli18} className={styles.forProfilePictures} onClick={() => navigate('/ClientProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Sam Owner</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>(CEO) Abs Limited</Typography>

          </Item>
        </Grid>


        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={cli19} className={styles.forProfilePictures} onClick={() => navigate('/ClientProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Sam Owner</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>(CEO) Abs Limited</Typography>

          </Item>
        </Grid>

        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={cli20} className={styles.forProfilePictures} onClick={() => navigate('/ClientProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Sam Owner</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>(CEO) Abs Limited</Typography>

          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
    </>
  );
}