import EmployeeModal from '../../components/EmployeeModal';
import { Box, Stack, Typography, Button } from '@mui/material';

export default function RecruitAndOnboard() {
  return(
    <>
    <Box 
    sx={{p: 15}}>
    <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Button>first</Button>
        <Button>first</Button>
        <Button>first</Button>
        <EmployeeModal />
      </Stack>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Button>first</Button>
        <Button>first</Button>
        <Button>first</Button>
        <EmployeeModal />
      </Stack>
    
    </Box>
    </>
    
  );
}

const Div1 = {
  
  paddingLeft: 500,
};