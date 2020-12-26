import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import project1 from '../images/html-css-javascript-lg.54fd4234.jpg';
import project2 from '../images/html-css-javascript-lg.54fd4234.jpg';
import project3 from '../images/react.png';
import project4 from '../images/react.png';
import project5 from '../images/html-css-black-background.jpeg';
import project6 from '../images/mernstack.png';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#233',
    height: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '3rem auto',
  },
}));

const projects = [
  {
    name: 'T-V show dom project ',
    description: `Project made using HTML,CSS,Java script dom.It uses css variables and sass styles.It uses api provided by tvmaze.com.Implement search and drop down functionality using dom.This project was part of my course work at Code Your Future.This was the first project I made after I graduated so it is pretty close to my heart.`,
    image: project1,
    link: `https://cyf-taslima26-tv.netlify.app/`,
  },
  {
    name: 'Rock-Paper-Scissor-Dom',
    description: `This is classic Rock paper scissor game made using html,css and java script dom manipulation.It is made with lots of css and lots of love .My daughters have lots of fun playing with one of the cool app their mom made. I made this project as extra challenge while learning javacript modules at CODE YOUR FUTURE.`,
    image: project2,
    link: `https://rock-paper-scissorodom.netlify.app/`,
  },
  {
    name: 'Baby-names-react',
    description: `This is one of the challenge provided on frontend mentor.It implemented using create react app and use json file as data.It provides names of poplular baby names.It is also implement filtering functionality between girls and boys names.I made this project as extra while learning React module at Code Your Future  `,
    image: project3,
    link: `http://taslima26.github.io/baby-names-react`,
  },
  {
    name: 'Countries-React',
    description: `This is one of the challange provided on front end mentor.It fetches countries api.Display all countries detail in a grid.It also includes search and dropdown functionality.It also implement theme switcher using css variables and toggles theme between dark and light background .I made this project as extra while learning React module with Code Your Future `,
    image: project4,
    link: `https://cyf-countries-react.herokuapp.com/`,
  },
  {
    name: 'Project 5',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project5,
  },
  {
    name: 'Cyf-Blog-App',
    description: `This app was made as my final project.It is fully functional pern stack deployed on heroku.It uses material ui for styling .It uses lots of advance react functionlity such as react-router-dom and history hooks.users are able to login using github api.Authorize users able to use CRUD functionality.Non authoize user are able to read all the blog and provide rating for it.Please check it out.Its cool!!!`,
    image: project6,
    link: `https://cyf-blog-app.herokuapp.com`,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component='div' className={classes.mainContainer}>
      <Grid container justify='center'>
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Project 1'
                  height='140'
                  image={project.image}
                />
                <CardContent>
                  <Typography variant='h5' gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Share
                </Button>
                <Button
                  size='small'
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = project.link;
                  }}
                  color='primary'
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
