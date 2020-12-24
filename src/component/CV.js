import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  cvContainer: {
    background: '#233',
    height: '100vh',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordianWidth: {
    width: '80%',
    margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(1.5),
      backgroundColor: 'purple',
  },
}));

export default function Variants() {
  const classes = useStyles();

  return (
    <div className={classes.cvContainer}>
      <Paper variant='outlined' square>
        <div className={classes.accordianWidth}>
          <Accordion className={classes.accordianWidth}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className={classes.heading}>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Paper>
    </div>
  );
}
