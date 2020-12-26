import React from 'react';
import { Grid, Cell } from 'react-mdl';
import './CV.css';

const Certifications = ({ startDate, certificationName }) => {
  return (
    <Grid>
      <Cell col={4}>
        <p>{startDate}</p>
      </Cell>
      <Cell col={8}>
        <h4 style={{ marginTop: '0px' }}>{certificationName}</h4>
      </Cell>
    </Grid>
  );
};

export default Certifications;
