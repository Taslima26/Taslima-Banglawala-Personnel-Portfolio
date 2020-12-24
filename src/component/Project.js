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
import project2 from '../images/javascript-fullstack.730958a2.jpeg';
import project3 from '../images/react.png';
import project4 from '../images/react.png';
import project5 from '../images/react.png';
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
    name: 'Project 1',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
    consequatur magni quod nesciunt necessitatibus molestiae non
    eligendi, magnam est aliquam recusandae? Magnam soluta minus
    iste alias sunt veritatis nisi dolores!`,
    image: project1,
    link: `https://cyf-taslima26-tv.netlify.app/`,
  },
  {
    name: 'Project 2',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project2,
  },
  {
    name: 'Project 3',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project3,
    link: `http://taslima26.github.io/baby-names-react`,
  },
  {
    name: 'Project 4',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
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
    name: 'Project 6',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
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
                      window.location.href = project.link 
                     
                  }}
                  color='primary'
                >Live Demo</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
