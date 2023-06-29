import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Stack, Button } from '@mui/material';
import styles from '../../components/myStyles.module.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import AddProjectModal from '../../components/modals/AddProjectModal';
import EmployeeAvatarGroup from '../../components/EmployeeAvatarGroup';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  height: 500,
  color: theme.palette.text.secondary,
}));

export default function Projects() {
  return (
    <>
    <div>
    <Box sx={{ flexGrow: 1 }}>


    <Typography className={styles.forTextOnBackground} variant='h6'>Projects</Typography>
      <Box sx={{display: 'flex'}}>
      <Typography className={styles.forMinorTextOnBackground}>Projects</Typography>
      <AddProjectModal/>
      </Box>


      
      <Grid container spacing={2} columns={11} rowSpacing={4} >
        <Grid item xs={5} md={3.5}>
        <Item>
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
          <Typography className={styles.forContainers2nd}>pics</Typography>
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Team:</Typography>  
          <EmployeeAvatarGroup />
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Progress</Typography>  
          <Typography className={styles.forContainers2nd}>%age progress bar</Typography>
          </div>
        </Item>
        </Grid>





        <Grid item xs={5} md={3.5}>
          <Item>
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
          <Typography className={styles.forContainers2nd}>pics</Typography>
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Team:</Typography>  
          <EmployeeAvatarGroup />
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Progress</Typography>  
          <Typography className={styles.forContainers2nd}>%age progress bar</Typography>
          </div>
          </Item>
        </Grid>





        <Grid item xs={5} md={3.5}>
          <Item>
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
          <Typography className={styles.forContainers2nd}>pics</Typography>
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Team:</Typography>  
          <EmployeeAvatarGroup />
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Progress</Typography>  
          <Typography className={styles.forContainers2nd}>%age progress bar</Typography>
          </div>
          </Item>
        </Grid>





        <Grid item xs={5} md={3.5}>
          <Item>
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
          <Typography className={styles.forContainers2nd}>pics</Typography>
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Team:</Typography>  
          <EmployeeAvatarGroup />
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Progress</Typography>  
          <Typography className={styles.forContainers2nd}>%age progress bar</Typography>
          </div>
          </Item>
        </Grid>





        <Grid item xs={5} md={3.5}>
          <Item>
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
          <Typography className={styles.forContainers2nd}>pics</Typography>
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Team:</Typography>  
          <EmployeeAvatarGroup />
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Progress</Typography>  
          <Typography className={styles.forContainers2nd}>%age progress bar</Typography>
          </div>
          </Item>
        </Grid>






        <Grid item xs={5} md={3.5}>
          <Item>
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
          <Typography className={styles.forContainers2nd}>pics</Typography>
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Team:</Typography>  
          <EmployeeAvatarGroup />
          </div>

          <div>
          <Typography className={styles.forContainers1st}>Progress</Typography>  
          <Typography className={styles.forContainers2nd}>%age progress bar</Typography>
          </div>
          </Item>
        </Grid>



        
        
      </Grid>
    </Box>
    </div>
    </>
  );
}