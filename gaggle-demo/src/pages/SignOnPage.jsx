import React from "react";
import { Link } from "react-router-dom";

import SignOnForm from "../components/SignOnForm";
import RegisterAcoountForm from "../components/RegisterAccountForm";
import { Box, Dialog } from "@mui/material";

const SignOnPage = (register) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SignOnForm />
      <Box sx={{ padding: "20px" }}>
        <Link style={{ margin: "16px" }} onClick={handleClickOpen}>
          Register
        </Link>
        <span style={{ margin: "16px" }}>|</span>
        <Link style={{ margin: "16px" }} to={`/forgot-password`}>
          Forgot Password?
        </Link>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <RegisterAcoountForm />
      </Dialog>
    </>
  );
};

export default SignOnPage;
