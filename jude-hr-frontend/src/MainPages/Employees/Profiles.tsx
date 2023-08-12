import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Stack, Button } from '@mui/material';
import styles from '../../components/myStyles.module.css'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import SearchBar from '../../components/SearchBar';


//employee pics


import emp1 from '../../assets/EmployeeImages/employee1.jpg'
import emp2 from '../../assets/EmployeeImages/employee2.jpg'
import emp3 from '../../assets/EmployeeImages/employee3.jpg'
import emp4 from '../../assets/EmployeeImages/employee4.jpg'
import emp5 from '../../assets/EmployeeImages/employee5.jpg'
import emp6 from '../../assets/EmployeeImages/employee6.jpg'
import emp7 from '../../assets/EmployeeImages/employee7.jpg'
import emp8 from '../../assets/EmployeeImages/employee8.jpg'
import emp9 from '../../assets/EmployeeImages/employee9.jpg'
import emp10 from '../../assets/EmployeeImages/employee10.jpg'
import emp11 from '../../assets/EmployeeImages/employee11.jpg'
import emp12 from '../../assets/EmployeeImages/employee12.jpg'
import emp13 from '../../assets/EmployeeImages/employee13.jpg'
import emp14 from '../../assets/EmployeeImages/employee14.jpg'
import emp15 from '../../assets/EmployeeImages/employee15.jpg'
import emp16 from '../../assets/EmployeeImages/employee16.jpg'
import emp17 from '../../assets/EmployeeImages/employee17.jpg'
import emp18 from '../../assets/EmployeeImages/employee18.jpg'
import emp19 from '../../assets/EmployeeImages/employee19.jpg'
import emp20 from '../../assets/EmployeeImages/employee20.jpg'


import AddIcon from '@mui/icons-material/Add';
import EmployeeModal from '../../components/modals/EmployeeModal';
import { Route, Routes, useNavigate } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  alignItems: 'center',
  justifyContent: 'center',
  height: 200,
  color: theme.palette.text.secondary,
  alignContent: 'center',
  display: 'flex',
  flexDirection: 'column'
  
}));




// // const getProfileImage = () =>{
//         to be done later
// // }

export default function Profiles() {

  const navigate = useNavigate();
  return (
    <>
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Typography className={styles.forTextOnBackground} variant='h6'>Employees</Typography>
      <Box sx={{display: 'flex', flexDirection: 'row', alignItems:'center'}}>
      <Typography className={styles.forMinorTextOnBackground}>Employee Profiles</Typography>
      
      
      <SearchBar/>

      <EmployeeModal />
      

      </Box>
      <Grid container spacing={2} columns={11} rowSpacing={4} paddingLeft={10}>
        <Grid item xs={5} md={2.5}>
        <Item>
        <img src={emp1} className={styles.forProfilePictures} onClick={() => navigate('/EmployeeProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>John Smitch</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>Team Leader</Typography>
        </Item>
        </Grid>
        <Grid item xs={5} md={2.5}>
          <Item>
          <img src={emp2} className={styles.forProfilePictures} onClick={() => navigate('/EmployeeProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Lenny Bot</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>Ios Developer</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={2.5}>
          <Item>
          <img src={emp3} className={styles.forProfilePictures} onClick={() => navigate('/EmployeeProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Kengo Wada</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>Android Developer</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={2.5}>
          <Item>
          <img src={emp4} className={styles.forProfilePictures} onClick={() => navigate('/EmployeeProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Leo Trex</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>Web Developer</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={2.5}>
          <Item>
          <img src={emp5} className={styles.forProfilePictures} onClick={() => navigate('/EmployeeProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>King Trevor</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>Web Designer</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={2.5}>
          <Item>
          <img src={emp6} className={styles.forProfilePictures} onClick={() => navigate('/EmployeeProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Capo Meyt</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>Web Developer</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={2.5}>
          <Item>
          <img src={emp7} className={styles.forProfilePictures} onClick={() => navigate('/EmployeeProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Leslie Carter</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>Ios Developer</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={2.5}>
          <Item>
          <img src={emp8} className={styles.forProfilePictures} onClick={() => navigate('/EmployeeProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Lex Moryt</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>Android Developer</Typography>
          </Item>
        </Grid>
        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={emp9} className={styles.forProfilePictures} onClick={() => navigate('/EmployeeProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Boyd Martins</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>Web Developer</Typography>

          </Item>
        </Grid>

        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={emp10} className={styles.forProfilePictures} onClick={() => navigate('/EmployeeProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Boyd Martins</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>Web Developer</Typography>

          </Item>
        </Grid>

        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={emp11} className={styles.forProfilePictures} onClick={() => navigate('/EmployeeProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Boyd Martins</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>Web Developer</Typography>

          </Item>
        </Grid>


        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={emp12} className={styles.forProfilePictures} onClick={() => navigate('/EmployeeProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Boyd Martins</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>Web Developer</Typography>

          </Item>
        </Grid>


        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={emp13} className={styles.forProfilePictures} onClick={() => navigate('/EmployeeProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Boyd Martins</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>Web Developer</Typography>

          </Item>
        </Grid>



        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={emp14} className={styles.forProfilePictures} onClick={() => navigate('/EmployeeProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Boyd Martins</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>Web Developer</Typography>

          </Item>
        </Grid>



        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={emp15} className={styles.forProfilePictures} onClick={() => navigate('/EmployeeProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Boyd Martins</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>Web Developer</Typography>

          </Item>
        </Grid>



        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={emp16} className={styles.forProfilePictures} onClick={() => navigate('/EmployeeProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Boyd Martins</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>Web Developer</Typography>

          </Item>
        </Grid>



        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={emp17} className={styles.forProfilePictures} onClick={() => navigate('/EmployeeProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Boyd Martins</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>Web Developer</Typography>

          </Item>
        </Grid>



        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={emp18} className={styles.forProfilePictures} onClick={() => navigate('/EmployeeProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Boyd Martins</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>Web Developer</Typography>

          </Item>
        </Grid>



        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={emp19} className={styles.forProfilePictures} onClick={() => navigate('/EmployeeProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Boyd Martins</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>Web Developer</Typography>

          </Item>
        </Grid>



        <Grid item xs={5} md={2.5}>
          <Item>

          <img src={emp20} className={styles.forProfilePictures} onClick={() => navigate('/EmployeeProfile')}></img>
          <Typography className={styles.forMainText} sx={{fontWeight: 'bold', fontSize: 18}}>Boyd Martins</Typography>
          <Typography className={styles.forMinorMainText} sx={{fontSize: 14}}>Web Developer</Typography>

          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
    </>
  );
}