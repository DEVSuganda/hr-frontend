import * as React from 'react';
import { Box, Input, Button, Typography, FormControl, FormLabel} from "@mui/material";
import { Outlet, Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [mounted, setMounted] = React.useState(false);

  const navigate = useNavigate()
  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  



  return (
    
      <>
        
        <Box
        sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
        
        >
          
            <Typography alignContent='center' variant='h3'>
              Welcome!
            </Typography>
            <Typography>Sign in to continue.</Typography>
          
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@email.com"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>

          <Button 
          sx={{ mt: 1 /* margin top */ }}
          //onClick={() => navigate('MuiDrawer')}
          ><Link to="/MuiDrawer">Log in</Link></Button>
          <Typography>
            Don't have an account?
          </Typography>
        </Box>
      
        </>
  );
}

export default Login