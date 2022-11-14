import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import GaggleLogo from "../assets/logo--Gaggle.svg";
import Hero from "../assets/hero-image.png";

const ForgotPasswordPage = () => {
  const [values, setValues] = React.useState({
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const validate = () => {
    return values.email.length;
  };

  const handleForgotPassword = () => {
    navigate("/");
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
              <a href="/">
                <img
                  src={GaggleLogo}
                  height="40"
                  style={{ marginLeft: "16px" }}
                />
              </a>
            </div>
            <div>
              <Typography component="h2" variant="h4">
                Forgot Password
              </Typography>
              <Typography variant="body1">
                Enter the email you used to register your account to send a
                password hint
              </Typography>
              <FormControl sx={{ m: 2, width: "90%" }}>
                <InputLabel htmlFor="username">Email</InputLabel>
                <OutlinedInput
                  id="email"
                  label="Email"
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange("email")}
                />
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                onClick={handleForgotPassword}
                disabled={!validate()}
              >
                Reset Password
              </Button>
            </div>
            <div style={{ position: "absolute", bottom: 0 }}>
              <Box
                sx={{
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Link style={{ margin: "16px" }}>Register</Link>
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
    </>
  );
};

export default ForgotPasswordPage;
