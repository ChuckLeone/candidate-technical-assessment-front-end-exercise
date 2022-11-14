import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import GaggleLogo from '../assets/logo--Gaggle.svg';
import IncidentTable from '../components/IncidentTable';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 20,
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.9),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const IncidentsPage = () => {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar
                style={{
                  backgroundColor: '#e1e1e1',
                  color: '#333',
                }}
              >
                <StyledToolbar>
                  <IconButton>
                    <AppsIcon />
                    <header>
                      <a href="/">
                        <span className="sr-only">Link back to main page</span>
                        <img
                          src={GaggleLogo}
                          height="40"
                          style={{ marginLeft: '16px' }}
                          alt="gaggle logo linking back to main page"
                        />
                      </a>
                      <Typography component="h1" className="sr-only">
                        Gaggle
                      </Typography>
                    </header>
                  </IconButton>
                  <Box sx={{ flexGrow: 1 }} />

                  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <div style={{ paddingRight: '18px' }}>
                      <Alert severity="warning" variant="outlined">
                        Save Unsuccessful
                      </Alert>
                    </div>
                    <div style={{ paddingRight: '18px' }}>
                      <Typography> </Typography>

                      <Alert
                        variant="outlined"
                        icon={
                          <CircularProgress
                            size={16}
                            style={{ paddingLeft: '8px' }}
                            role="progressbar"
                            aria-label="retrying"
                          />
                        }
                        severity="info"
                      >
                        Retrying...
                      </Alert>
                    </div>
                  </Box>
                </StyledToolbar>
                <nav>
                  <Box
                    style={{ margin: '16px', padding: '8px' }}
                    sx={{ display: { xs: 'none', md: 'flex' } }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: 'white',
                        color: '#333333',
                        marginRight: '16px',
                      }}
                      startIcon={<SearchIcon />}
                    >
                      Button 1
                    </Button>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: 'white',
                        color: '#333333',
                        marginRight: '16px',
                      }}
                      startIcon={<CloudSyncIcon />}
                    >
                      Button 2
                    </Button>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: 'white', color: '#333333' }}
                      startIcon={<ReceiptLongIcon />}
                    >
                      Button 3
                    </Button>
                    <Box sx={{ flexGrow: 1 }} />
                    <Search>
                      <SearchIconWrapper>
                        <FilterAltIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Find - filter by keyword"
                        inputProps={{ 'aria-label': 'search' }}
                      />
                    </Search>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: 'white',
                        color: '#333333',
                        marginLeft: '16px',
                        marginRight: '16px',
                      }}
                      startIcon={<FileDownloadIcon />}
                    >
                      Export
                    </Button>
                  </Box>
                </nav>
              </AppBar>
            </Box>
          </Grid>
          <Grid item sm={12}>
            <main>
              <div style={{ width: '100%', marginTop: '170px' }}>
                <IncidentTable />
              </div>
            </main>
          </Grid>
          <Grid item sm={12}>
            <footer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default IncidentsPage;
