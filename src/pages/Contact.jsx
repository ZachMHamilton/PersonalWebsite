import Nav from '../components/nav';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';

const Contact = () => {
  const theme = useTheme();
  return (
    <div id="page">
      <Nav></Nav>
      <div id="contact">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <h1 style={{ color: 'white', fontSize: '5em' }}>
            Let&apos;s work together!
          </h1>
          <p
            style={{
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <EmailIcon />
            &nbsp; Email me at:&nbsp;
            <a
              href="mailto: zachmhamilton@outlook.com"
              style={{ color: theme.palette.accent.main }}
            >
              zachmhamilton@outlook.com
            </a>
          </p>
          <p
            style={{
              color: 'white',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <LinkedInIcon />
            &nbsp; Connect with me on&nbsp;
            <a
              href="https://www.linkedin.com/in/zach-m-hamilton/"
              style={{ color: theme.palette.accent.main }}
            >
              LinkedIn
            </a>
          </p>
          <p
            style={{
              color: 'white',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <GitHubIcon />
            &nbsp; Follow my work on&nbsp;
            <a
              href="https://github.com/ZachMHamilton"
              style={{ color: theme.palette.accent.main }}
            >
              GitHub
            </a>
          </p>
        </div>
        <Box
          component="form"
          bgcolor={'background-color: rgba(255,255,255,1);'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            padding: '2em',
            borderRadius: '1em',
          }}
        >
          <h2 style={{ color: 'white', margin: 0 }}>Send me a message!</h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2em',
              marginTop: '1em',
            }}
          >
            <TextField
              required
              id="outlined-required"
              label="Full Name"
              color="primary"
              InputProps={{
                style: {
                  color: theme.palette.accent.main,
                  borderBottom: `1px solid ${theme.palette.primary.main}`,
                  // borderBottom: '1px solid white',
                },
              }}
              InputLabelProps={{
                style: {
                  color: theme.palette.accent.main,
                },
              }}
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              color="primary"
              InputProps={{
                style: {
                  color: theme.palette.accent.main,
                  borderBottom: `1px solid ${theme.palette.primary.main}`,
                },
              }}
              InputLabelProps={{
                style: {
                  color: theme.palette.accent.main,
                },
              }}
            />
            <TextField
              id="outlined-required"
              label="Subject"
              color="primary"
              InputProps={{
                style: {
                  color: theme.palette.accent.main,
                  borderBottom: `1px solid ${theme.palette.primary.main}`,
                },
              }}
              InputLabelProps={{
                style: {
                  color: theme.palette.accent.main,
                },
              }}
            />
            <div>
              <div style={{ color: 'white', paddingBottom: '1em' }}>
                Message
              </div>
              <TextField
                required
                id="outlined-required"
                color="primary"
                multiline
                rows={4}
                sx={{
                  width: '100%',
                }}
                InputProps={{
                  style: {
                    color: theme.palette.accent.main,
                    border: `1px solid ${theme.palette.primary.main}`,
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: theme.palette.accent.main,
                  },
                }}
              />
            </div>
            <Button
              color="primary"
              variant="contained"
              style={{
                width: '10em',
              }}
            >
              Send
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Contact;
