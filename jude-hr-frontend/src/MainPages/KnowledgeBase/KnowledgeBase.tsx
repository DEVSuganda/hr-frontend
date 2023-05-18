import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Stack } from '@mui/material';
import styles from '../../components/myStyles.module.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  height: 250,
  color: theme.palette.text.secondary,
}));

export default function KnowledgeBase() {
  return (
    <>
    <div className={styles.mainbody}>
    <Box sx={{ flexGrow: 1 }}>
      <Typography className={styles.forTextOnBackground}>hey</Typography>
      <Grid container spacing={2} columns={11} rowSpacing={4} >
        <Grid item xs={5} md={3.5}>
        <Item>
          <Typography>hey</Typography>
        </Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
    </div>
    </>
  );
}