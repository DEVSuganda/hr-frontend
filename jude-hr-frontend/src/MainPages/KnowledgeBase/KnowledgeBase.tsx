import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Stack } from '@mui/material';
import styles from '../../components/myStyles.module.css';
import SnippetFolderIcon from '@mui/icons-material/SnippetFolder';
import { Outlet, Link } from "react-router-dom";


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
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Typography className={styles.forTextOnBackground} variant='h6'>Knowledge Base</Typography>
      <Typography className={styles.forMinorTextOnBackground}>Useful Information</Typography>
      <Grid container spacing={2} columns={11} rowSpacing={4} >
        <Grid item xs={5} md={3.5}>
        <Item>
        <Typography className={styles.knowledgeBaseText} variant='h6'><SnippetFolderIcon />    Knowledge Base</Typography><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          </Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
          <Item>
          <Typography className={styles.knowledgeBaseText} variant='h6'><SnippetFolderIcon />    Knowledge Base</Typography><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          </Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
        <Item>
        <Typography className={styles.knowledgeBaseText} variant='h6'><SnippetFolderIcon />    Knowledge Base</Typography><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          </Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
        <Item>
        <Typography className={styles.knowledgeBaseText} variant='h6'><SnippetFolderIcon />    Knowledge Base</Typography><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          </Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
        <Item>
        <Typography className={styles.knowledgeBaseText} variant='h6'><SnippetFolderIcon />    Knowledge Base</Typography><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          </Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
        <Item>
        <Typography className={styles.knowledgeBaseText} variant='h6'><SnippetFolderIcon />    Knowledge Base</Typography><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          </Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
        <Item>
        <Typography className={styles.knowledgeBaseText} variant='h6'><SnippetFolderIcon />    Knowledge Base</Typography><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          </Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
        <Item>
        <Typography className={styles.knowledgeBaseText} variant='h6'><SnippetFolderIcon />    Knowledge Base</Typography><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          </Item>
        </Grid>
        <Grid item xs={5} md={3.5}>
        <Item>
        <Typography className={styles.knowledgeBaseText} variant='h6'><SnippetFolderIcon />    Knowledge Base</Typography><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          <Link to="https://www.w3schools.com/react/react_router.asp"><SnippetFolderIcon /> Example</Link><br />
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
    </>
  );
}