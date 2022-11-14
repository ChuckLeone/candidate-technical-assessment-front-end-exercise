import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import GaggleLogo from '../assets/logo--Gaggle.svg';
import Hero from '../assets/hero-image.png';

const ForgotPasswordPage = () => {
  const [values, setValues] = React.useState({
    email: '',
  });

  const navigate = useNavigate();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const validate = () => {
    return values.email.length;
  };

  const handleForgotPassword = () => {
    navigate('/');
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          width: '100%',
          backgroundColor: '#000',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div style={{ backgroundColor: 'rgba(0,0,0,0.5' }}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item sm={6}>
              <div
                style={{
                  backgroundColor: 'white',
                  minHeight: '100vh',
                  width: '100%',
                }}
              >
                <Container>
                  <Grid container>
                    <Grid
                      item
                      lg={12}
                      style={{
                        position: 'absolute',
                        top: 0,
                        marginTop: '20px',
                        height: '20vh',
                      }}
                    >
                      <a href="/">
                        <span className="sr-only">Link back to main page</span>
                        <img
                          src={GaggleLogo}
                          height="40"
                          style={{ marginLeft: '16px' }}
                          alt="gaggle logo linking back to main page"
                        />
                      </a>
                      <header>
                        <Typography component="h1" className="sr-only">
                          Gaggle
                        </Typography>
                      </header>
                    </Grid>
                    <Grid
                      item
                      lg={12}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '80vh',
                      }}
                    >
                      <main>
                        <Box
                          sx={{
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            width: 500,
                          }}
                        >
                          <Grid container>
                            <Grid item lg={12}>
                              <Typography component="h2" variant="h4">
                                Forgot Password
                              </Typography>
                            </Grid>
                            <Grid item lg={12}>
                              <Typography variant="body1">
                                Enter the email you used to register your
                                account to send a password hint
                              </Typography>
                            </Grid>
                            <Grid item lg={12}>
                              <FormControl
                                sx={{ m: 2, width: '100%', marginLeft: 0 }}
                              >
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <OutlinedInput
                                  id="email"
                                  label="Email"
                                  variant="outlined"
                                  value={values.email}
                                  onChange={handleChange('email')}
                                />
                              </FormControl>
                            </Grid>
                            <Grid item lg={12} style={{ textAlign: 'right' }}>
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={handleForgotPassword}
                                disabled={!validate()}
                              >
                                Reset Password
                              </Button>
                            </Grid>
                          </Grid>
                        </Box>
                      </main>
                    </Grid>
                    <Grid
                      item
                      lg={12}
                      style={{ position: 'absolute', bottom: 0 }}
                    >
                      <footer>
                        <Box
                          sx={{
                            padding: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <Link style={{ margin: '16px' }} to="/">
                            Register
                          </Link>
                          <span style={{ margin: '16px' }}>|</span>
                          <Link
                            style={{ margin: '16px' }}
                            to={`/forgot-password`}
                          >
                            Forgot Password?
                          </Link>
                        </Box>
                      </footer>
                    </Grid>
                  </Grid>
                </Container>
              </div>
            </Grid>
            <Grid item sm={6}>
              <div
                style={{
                  color: 'black',
                  minHeight: '100vh',
                  width: '100%',
                }}
              ></div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
