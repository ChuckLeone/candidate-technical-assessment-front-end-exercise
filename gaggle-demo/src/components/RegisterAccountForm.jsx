import React from 'react';
import {
  Box,
  Button,
  DialogContent,
  DialogActions,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const RegisterAccountForm = (props) => {
  const [values, setValues] = React.useState({
    username: '',
    password: '',
    email: '',
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

  const validate = () => {
    return (
      values.username.length && values.password.length && values.email.length
    );
  };

  return (
    <>
      <Box sx={{ width: 500, padding: '16px' }}>
        <Typography component="h3" variant="h5">
          New Account
        </Typography>
        <DialogContent>
          <FormControl sx={{ m: 2, width: '90%' }}>
            <InputLabel htmlFor="username">Username</InputLabel>
            <OutlinedInput
              id="username"
              label="Username"
              variant="outlined"
              value={values.username}
              onChange={handleChange('username')}
              error={values.usernameError}
            />
          </FormControl>

          <FormControl sx={{ m: 2, width: '90%' }} variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              label="Password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
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
          <FormControl sx={{ m: 2, width: '90%' }}>
            <InputLabel htmlFor="username">Email</InputLabel>
            <OutlinedInput
              id="email"
              label="Email"
              variant="outlined"
              value={values.email}
              onChange={handleChange('email')}
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
