import React from "react";
import { redirect } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  Button,
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  FormHelperText,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SignOnForm = () => {
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false,
    disableSignOn: true,
    usernameError: false,
    passwordError: false,
    usernameErrorMessage: "",
    passwordErrorMessage: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    if (values.usernameError) {
      resetUsernameError();
    }
    if (values.passwordError) {
      resetPasswordError();
    }
  };

  const resetUsernameError = () => {
    setValues({
      ...values,
      usernameErrorMessage: "",
      usernameError: false,
    });
  };

  const resetPasswordError = () => {
    setValues({
      ...values,
      passwordErrorMessage: "",
      passwordError: false,
    });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleUsernameError = (props) => {
    setValues({
      ...values,
      usernameErrorMessage: props,
      usernameError: true,
    });
  };

  const handlePasswordError = (props) => {
    setValues({
      ...values,
      passwordErrorMessage: props,
      passwordError: true,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const logIn = () => {
    if (values.username !== "chuck") {
      handleUsernameError("Incorrect username, try again!");
    }
    if (values.password !== "foo") {
      handlePasswordError("Incorrect password, try again!");
    } else if (values.username === "chuck" && values.password === "foo") {
      //redirectUser();
      console.log("auth successful, redirecting user...");
      return redirect(`/incidents/`);
    }
  };

  const validate = () => {
    return values.username.length && values.password.length;
  };

  return (
    <>
      <Box
        sx={{
          flexWrap: "wrap",
          justifyContent: "center",
          width: 450,
        }}
      >
        <div>
          <FormControl sx={{ m: 1, width: "90%" }}>
            <InputLabel htmlFor="username">Username</InputLabel>
            <OutlinedInput
              id="username"
              label="Username"
              variant="outlined"
              value={values.username}
              onChange={handleChange("username")}
              error={values.usernameError}
            />
            <FormHelperText>{values.usernameErrorMessage}</FormHelperText>
          </FormControl>

          <FormControl sx={{ m: 1, width: "90%" }} variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              label="Password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              error={values.passwordError}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText id="outlined-weight-helper-text">
              {values.passwordErrorMessage}
            </FormHelperText>
            <div style={{ textAlign: "left" }}>
              <Checkbox /> Remember
            </div>
          </FormControl>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={logIn}
            disabled={!validate()}
          >
            Sign On
          </Button>
        </div>
      </Box>
    </>
  );
};

export default SignOnForm;
