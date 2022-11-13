import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

const SignOnFooter = (props) => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Link style={{ margin: "16px" }} to={`/incidents`}>
        Link
      </Link>
      <Link style={{ margin: "16px" }} props={props.register}>
        Register
      </Link>
      <span style={{ margin: "16px" }}>|</span>
      <Link style={{ margin: "16px" }} to={`/forgot-password`}>
        Forgot Password?
      </Link>
    </Box>
  );
};

export default SignOnFooter;
