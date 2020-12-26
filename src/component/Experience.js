import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

const Experience =({startYear,endYear,jobName,jobDescription})=>{
  
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {startYear} - {endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: '0px' }}>{jobName}</h4>
          <p>{jobDescription}</p>
        </Cell>
      </Grid>
    );
  }


export default Experience;
