import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignOnForm from '../components/SignOnForm';
import RegisterAccountForm from '../components/RegisterAccountForm';
import {
  Box,
  Container,
  Dialog,
  Grid,
  Snackbar,
  Typography,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import GaggleLogo from '../assets/logo--Gaggle.svg';
import Hero from '../assets/hero-image.png';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SignOnPage = (register) => {
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const navigate = useNavigate();

  const registerAccount = () => {
    setOpen(false);
    console.log('hey');
    setOpenAlert(true);
    setTimeout(() => {
      setOpenAlert(false);
      navigate('/incidents');
    }, '4000');
  };

  const handleClose = () => {
    setOpen(false);
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
                      <header>
                        <img src={GaggleLogo} height="40" alt="Gaggle logo" />
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
                        <SignOnForm style={{ width: '10em' }} />
                      </main>
                    </Grid>
                    <Grid
                      item
                      lg={12}
                      style={{ alignItems: 'center', justifyContent: 'center' }}
                    >
                      <footer>
                        <Box
                          sx={{
                            padding: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <Link
                            style={{
                              margin: '16px',
                              fontWeight: '600',
                              color: '#263A91',
                              textDecoration: 'none',
                            }}
                            onClick={handleClickOpen}
                          >
                            Register
                          </Link>
                          <span style={{ margin: '16px' }}>|</span>
                          <Link
                            style={{
                              margin: '16px',
                              fontWeight: '600',
                              color: '#263A91',
                              textDecoration: 'none',
                            }}
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

          <Dialog open={open} onClose={handleClose}>
            <RegisterAccountForm
              handleClose={handleClose}
              registerAccount={registerAccount}
            />
          </Dialog>

          <Snackbar
            open={openAlert}
            autoHideDuration={6000}
            onClose={registerAccount}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: '100%' }}
            >
              New account registration complete! You will be logged in and
              redirected to the main page.
            </Alert>
          </Snackbar>
        </div>
      </div>
    </>
  );
};

export default SignOnPage;
