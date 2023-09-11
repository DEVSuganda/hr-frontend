import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../components/theme";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/adminCharts/Header";
//import LineChart from "../../components/adminCharts/LineChart";
import GeographyChart from "../../components/adminCharts/GeographyChart";
import BarChart from "../../components/adminCharts/BarChart";
import StatBox from "../../components/adminCharts/StatBox";
import ProgressCircle from "../../components/adminCharts/ProgressCircle";
import kengo from '../../assets/EmployeeImages/kengo.jpg'
import styles from '../../components/myStyles.module.css'
import Grid from '@mui/material/Grid';

const AdminDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const DashItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 350,
    color: theme.palette.text.secondary,
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column'
    
  }));

  const DashItemRev = styled(Paper)(({ theme }) => ({
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

  const DashItemMid = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    alignItems: 'center',
    justifyContent: 'center',
    height: 350,
    color: theme.palette.text.secondary,
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column'
    
  }));

  const DashItemLong = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
    width: 500,
    color: theme.palette.text.secondary,
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column'
    
  }));


  return (
    <>
    <Box sx={{flexGrow:1}}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
      <img src={kengo} className={styles.forAdminProfilePictures}></img>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        
        <Box>
          <Button
            sx={{
              backgroundColor: '#bbff38',
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              
            }}
          >

            
            <DownloadOutlinedIcon sx={{ mr: "10px"}} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          
          display="flex"
          alignItems="center"
          justifyContent="left"
          paddingTop={12}
          
        >


          <Grid item xs={5} md={2.5}>
              <DashItem >
            <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
          </DashItem>
          </Grid>
          
        </Box>
        <Box
          gridColumn="span 3"
          
          display="flex"
          alignItems="center"
          justifyContent="center"
          paddingTop={12}
        >

          <Grid item xs={5} md={2.5}>
              <DashItem>
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
          </DashItem>
          </Grid>
        </Box>
        <Box
        
          gridColumn='span 3'
          display="flex"
          alignItems="center"
          justifyContent="center"
          paddingTop={12}
        >

<Grid item xs={5} md={2.5}>
              <DashItem>
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
          </DashItem>
          </Grid>
        </Box>
        <Box
          gridColumn="span 3"
          
          display="flex"
          alignItems="center"
          justifyContent="center"
          paddingTop={12}
        >

        <Grid item xs={5} md={2.5}>
              <DashItem>
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
          </DashItem>
          </Grid>
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          padding={10}
          
        >

          <Grid item xs={5} md={2.5}>
              <DashItemRev>
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
              sx={{ fontSize: { xs: 10, sm: 16, md: 20, xl: 28 } }}
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
              sx={{ fontSize: { xs: 10, sm: 16, md: 20, xl: 28 } }}
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>


          </DashItemRev>
          </Grid>
          <Box height="250px" m="-20px 0 0 0">
            {/* <LineChart isDashboard={true} /> */}
          </Box>
        </Box>

        
        <Box
          gridColumn="span 4"
          gridRow="span 4"
          
          
          paddingTop={16}
          
        >

          <Typography
            sx={{ fontSize: { xs: 10, sm: 16, md: 20, xl: 28 }, paddingBottom: 3 }} color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          <Grid item xs={5} md={2.5}>
              <DashItemLong sx={{overflow: 'auto'}}>


          
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            
        
            p="15px"
          >
            
            
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                sx={{ fontSize: { xs: 8, sm: 8, md: 10, xl: 14 } }}
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                  fontSize={8}
                  letterSpacing={18}
                >
                  {transaction.txId}
                </Typography>
                <Typography
                sx={{ fontSize: { xs: 8, sm: 8, md: 10, xl: 14 } }} color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
            
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
          </DashItemLong>
          </Grid>
        </Box>
        
        

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          
          p="10px"
        >
          

          <Grid item xs={5} md={2.5}>
              <DashItemMid>


          <Typography
          sx={{ fontSize: { xs: 10, sm: 16, md: 20, xl: 28 } }} variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
            sx={{  mt: "15px", fontSize: { xs: 10, sm: 16, md: 20, xl: 28 } }}
              variant="h5"
              color={colors.greenAccent[500]}
             
            >
              $48,352 revenue generated
            </Typography>
            <Typography
            sx={{ fontSize: { xs: 10, sm: 16, md: 20, xl: 28 } }}>Includes extra misc expenditures and costs</Typography>
          </Box>

          </DashItemMid>
          </Grid>
        </Box>

        
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          paddingTop={4}
          p='0.2px'
          
        >
          <Grid item xs={5} md={2.5}>
            
        
          <Typography
          sx={{ fontSize: { xs: 10, sm: 16, md: 20, xl: 28 } }}
            variant="h5"
            fontWeight="600"
          
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="20px">
            <BarChart isDashboard={true} />
          </Box>

            
            </Grid>
        </Box>

        
        <Box
          gridColumn="span 4"
          gridRow="span 2"
    
          paddingTop={8}
        >

      <Grid item xs={5} md={2.5}>
            
          <Typography
          sx={{ marginBottom: "15px", fontSize: { xs: 10, sm: 16, md: 20, xl: 28 } }}
            variant="h5"
            fontWeight="600"
           
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>

        
          </Grid>
        </Box>
            
           
      </Box>
    </Box>
    </>
  );
};

export default AdminDashboard;