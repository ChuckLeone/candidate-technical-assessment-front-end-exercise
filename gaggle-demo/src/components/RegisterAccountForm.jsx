import React from "react";
import { redirect } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  Button,
  Checkbox,
  DialogContent,
  DialogActions,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  FormHelperText,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const RegisterAccountForm = (props) => {
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    email: "",
    showPassword: false,
    disableRegister: true,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const registerAccount = () => {
    console.log("auth successful, redirecting user...");
    return redirect(`/incidents/`);
  };

  const validate = () => {
    return (
      values.username.length && values.password.length && values.email.length
    );
  };

  return (
    <>
      <Box sx={{ width: 450, padding: "20px" }}>
        <Typography>New Account</Typography>
        <DialogContent>
          <FormControl sx={{ m: 1, width: "25ch" }}>
            <InputLabel htmlFor="username">Username</InputLabel>
            <OutlinedInput
              id="username"
              label="Username"
              variant="outlined"
              value={values.username}
              onChange={handleChange("username")}
              error={values.usernameError}
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
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
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }}>
            <InputLabel htmlFor="username">Email</InputLabel>
            <OutlinedInput
              id="email"
              label="Email"
              variant="outlined"
              value={values.email}
              onChange={handleChange("email")}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={props.registerAccount}
            disabled={!validate()}
          >
            Register Account
          </Button>
        </DialogActions>
      </Box>
    </>
  );
};

export default RegisterAccountForm;
