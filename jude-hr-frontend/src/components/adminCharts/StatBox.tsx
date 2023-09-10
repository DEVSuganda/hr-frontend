import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import { ReactNode } from "react";


type StatProps = {
  title: string;
  subtitle: string;
  icon: ReactNode;
  progress: any;
  increase: any;

};
const StatBox: React.FunctionComponent<StatProps> = (props) => {
  const { title, subtitle, icon, progress, increase } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100], fontSize: { xs: '4', sm: '4', md: '4' } }}
          
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography sx={{ color: colors.greenAccent[500],  fontSize: { xs: 8, sm: 8, md: 16, xl: 20 } }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;