import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Nav = () => {
  const theme = useTheme();
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{
        backgroundColor: 'background.main',
        top: 0,
      }}
      style={{ background: 'transparent', boxShadow: 'none' }}
    >
      <Toolbar>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', gap: '2em' }}>
            <Typography
              variant="inherit"
              component={Link}
              to="/"
              style={{
                color:
                  currentPage === '/'
                    ? theme.palette.accent.main
                    : theme.palette.text.main,
                textDecoration: 'none',
              }}
            >
              Home
            </Typography>
            <Typography
              variant="inherit"
              component={Link}
              to="/about"
              style={{
                color:
                  currentPage === '/about'
                    ? theme.palette.accent.main
                    : theme.palette.text.main,
                textDecoration: 'none',
              }}
            >
              About
            </Typography>
            <Typography
              variant="inherit"
              component={Link}
              to="/portfolio"
              style={{
                color:
                  currentPage === '/portfolio'
                    ? theme.palette.accent.main
                    : theme.palette.text.main,
                textDecoration: 'none',
              }}
            >
              Portfolio
            </Typography>
            <Typography
              variant="inherit"
              component={Link}
              to="/contact"
              style={{
                color:
                  currentPage === '/contact'
                    ? theme.palette.accent.main
                    : theme.palette.text.main,
                textDecoration: 'none',
              }}
            >
              Contact
            </Typography>
          </div>
          <div style={{ color: theme.palette.accent.main }}>Zach Hamilton</div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
