import React from "react";
import { Link } from "react-router-dom";
import SignOnForm from "../components/SignOnForm";
import RegisterAcoountForm from "../components/RegisterAccountForm";
import { Box, Container, Dialog, Grid, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import GaggleLogo from "../assets/logo--Gaggle.svg";
import Hero from "../assets/hero-image.png";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SignOnPage = (register) => {
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenAlert(true);
    setTimeout(() => {
      setOpenAlert(false);
    }, "4000");
  };

  return (
    <>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sm={6} style={{ backgroundColor: "white" }}>
            <div style={{ position: "absolute", top: 0, marginTop: "20px" }}>
              <img src={GaggleLogo} height="40" />
            </div>
            <div>
              <SignOnForm />
            </div>
            <div style={{ position: "absolute", bottom: 0 }}>
              <Box
                sx={{
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Link style={{ margin: "16px" }} onClick={handleClickOpen}>
                  Register
                </Link>
                <span style={{ margin: "16px" }}>|</span>
                <Link style={{ margin: "16px" }} to={`/forgot-password`}>
                  Forgot Password?
                </Link>
              </Box>
            </div>
          </Grid>
          <Grid
            item
            sm={6}
            style={{
              backgroundImage: `url(${Hero})`,
              backgroundRepeat: "no-repeat",
              minHeight: "100vh",
              width: "100%",
              backgroundColor: "#000",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.5",
                color: "black",
                minHeight: "100vh",
                width: "100%",
              }}
            ></div>
          </Grid>
        </Grid>
      </Container>
      <Dialog open={open} onClose={handleClose}>
        <RegisterAcoountForm handleClose={handleClose} />
      </Dialog>

      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          New account registration complete! You may now sign on with your new
          acoount.
        </Alert>
      </Snackbar>
    </>
  );
};

export default SignOnPage;
