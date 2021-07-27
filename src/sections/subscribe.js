import React from 'react';
import { Button, Input, Box, Container, Heading, Text } from 'theme-ui';
import {Facebook, Mail, Instagram} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles'

const useStyles  = makeStyles((theme) => ({
  icons: {
    itemAlign: 'center',
    height: '100px',
    fontSize: '50px',
    marginLeft: '100px'
  }
}))

const Subscribe = () => {
  const classes = useStyles();
  return (
    <Box as="section" sx={styles.subscribe}>
      <Container>
        <Heading as="h3">About Us</Heading>
        <Text as="p">
          The best coffee service come with nice city view
        </Text>
        <Box sx={styles.icons}>
          <Facebook className={classes.icons}/>
          <Mail className={classes.icons}/>
          <Instagram className={classes.icons}/>
        </Box >
        <Box as="form" sx={styles.form}>
          <Box as="label" htmlFor="subscribeEmail" variant="styles.srOnly">
            Email
          </Box>
          <Text as="p2">
            Subscribe us to catch up the newest deals
          </Text>
          <Input
            placeholder="Enter your email"
            type="email"
            id="subscribeEmail"
            sx={styles.input}
          />
          <Button type="submit" sx={styles.button}>
            Subscribe us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Subscribe;

const styles = {
  subscribe: {
    py: ['80px', null, null, null, '80px', '100px', '140px'],
    backgroundColor: '#020718',
    mt: '50px',
    h3: {
      textAlign: 'center',
      fontSize: ['23px', null, null, null, null, '30px', '36px'],
      lineHeight: [1.5, null, null, '1'],
      color: '#fff',
      letterSpacing: ['-0.5px'],
      mb: ['0px', null, null, '15px'],
      width: ['70%', null, null, 'auto'],
      mx: ['auto', null, null, '0'],
    },
    p: {
      fontSize: ['16px'],
      color: '#fff',
      opacity: '.6',
      letterSpacing: ['-0.5px'],
      textAlign: 'center',
      width: ['70%', null, null, 'auto'],
      mx: ['auto', null, null, '0'],
      mt: ['10px', null, null, '0'],
    },
    p2: {
      fontSize: ['16px'],
      color: '#fff',
      opacity: '.6',
      letterSpacing: ['-0.5px'],
      width: ['70%', null, null, 'auto'],
      mx: ['auto', null, null, '0'],
      mt: ['10px', null, null, '-20px'],
      ml: '100px'
    }
  },
  form: {
    width: ['100%'],
    maxWidth: ['555px'],
    mx: ['auto'],
    display: ['flex'],
    flexWrap: ['wrap'],
    mt: ['30px', null, null, null, '60px'],
  },
  icons:
  {
    itemAlign: 'center',
    ml: '300px'
  },
  input: {
    width: ['100%'],
    maxWidth: ['100%', null, '370px', '380px'],
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'rgba(255,255,255, .08)',
    outline: 'none',
    color: 'rgba(255,255,255, .8)',
    fontSize: '16px',
    pl: ['0px', null, null, '30px'],
    height: ['50px', null, null, '60px'],
    mr: ['0px', null, null, '15px'],
    textAlign: ['center', null, null, 'left'],
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    fontWeight: '500',
    fontSize: ['18px'],
    color: '#020718',
    letterSpacing: '-0.5px',
    outline: 'none',
    padding: ['0px 30.75px'],
    minHeight: ['50px', null, null, '60px'],
    width: ['100%', null, null, 'auto'],
    mt: ['10px', null, null, '0'],
    mx: ['auto', null, null, '0'],
    '&:hover': {
      backgroundColor: '#fff',
      opacity: '0.8',
    },
  },
};
