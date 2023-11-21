import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Nav from '../components/Nav';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';

const Contact = () => {
  const [state, handleSubmit] = useForm('xoqozbro');
  let message = 'Send me a message!';
  if (state.succeeded) {
    message = 'Thanks for reaching out';
  }
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
          onSubmit={handleSubmit}
          bgcolor={'background-color: rgba(255,255,255,1);'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            padding: '2em',
            borderRadius: '1em',
          }}
        >
          <h2 style={{ color: 'white', margin: 0 }}>{message}</h2>
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
              id="name"
              label="Full Name"
              name="name"
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
            />{' '}
            <ValidationError
              prefix="Full Name"
              field="Full Name"
              errors={state.errors}
            />
            <TextField
              required
              id="email"
              type="email"
              label="Email"
              name="email"
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
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <TextField
              id="subject"
              label="Subject"
              name="subject"
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
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
            <div>
              <div style={{ color: 'white', paddingBottom: '1em' }}>
                Message
              </div>
              <TextField
                required
                id="message"
                name="message"
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
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={state.submitting}
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
