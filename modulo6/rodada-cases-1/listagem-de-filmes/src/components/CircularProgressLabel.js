import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


function CircularProgressLabel(props) {
    return (
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <CircularProgress
          variant="determinate"
          size="60"
          {...props}
          sx={{ color: "#14FF00", width: "62px", margin:"12px"}}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
            sx={{
              position: "relative",
              right:"60px",
              color: "#14FF00",
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }
  
  CircularProgressLabel.propTypes = {
 
    value: PropTypes.number.isRequired,
  };
  
  export default CircularProgressLabel;