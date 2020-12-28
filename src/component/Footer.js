import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: '#222',
  },
  root: {
    '& .MuiSvgIcon-root': {
      fill: 'tan',
      '&:hover': {
        fill: 'tomato',
        fontSize: '1.8rem',
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction
        icon={<LinkedInIcon />}
        className={classes.root}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `https://www.linkedin.com/in/taslima-banglawala-01b061b3`;
        }}
        
      />
      <BottomNavigationAction icon={<Twitter />} className={classes.root} />
      <BottomNavigationAction
        icon={<GitHubIcon />}
        className={classes.root}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `https://github.com/taslima26`;
        }}
      />
    </BottomNavigation>
  );
};
export default Footer;
