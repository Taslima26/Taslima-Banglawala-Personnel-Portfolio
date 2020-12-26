import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import './CV.css';
const CV = () => {
  return (
    <div>
      <Grid>
        <Cell col={4}>
          <h3>Taslima Banglawala</h3>
          <h4>Programmer</h4>
          <hr style={{ borderTop: '3px solid purple', width: '50%' }} />
          <p>
            A university graduate of information technology and graduate of the
            Full Stack Web Development Programme at CodeYourFuture, I am a
            technically proficient individual who works to find the root cause
            of problems rather than looking for quick fixes. My technical skills
            range from C# to SQL to front-end frameworks. I am a well-rounded
            hard-worker looking for a challenge.
          </p>
          <hr style={{ borderTop: '3px solid purple', width: '50%' }} />
          <h5>Github Id</h5>
          <p>https://github.com/Taslima26</p>
          <h5>Email</h5>
          <p>banglawalas@hotmail.co.uk</p>
          <h5>LinkedIn</h5>
          <p>mywebsite.com</p>
          <hr style={{ borderTop: '3px solid purple', width: '50%' }} />
        </Cell>
        <Cell className='resume-right-col' col={8}>
          <h2>Education</h2>

          <Education
            startYear={2006}
            endYear={2010}
            schoolName='Veer Narmad South Gujrat University'
            schoolDescription=""
          />

          <Education
            startYear={2007}
            endYear={2009}
            schoolName='My 2nd University'
            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
          <hr style={{ borderTop: '3px solid #e22947' }} />

          <h2>Experience</h2>

          <Experience
            startYear={2009}
            endYear={2012}
            jobName='First Job'
            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />

          <Experience
            startYear={2012}
            endYear={2016}
            jobName='Second Job'
            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
          <hr style={{ borderTop: '3px solid #e22947' }} />
          <h2>Skills</h2>
          <Skills skill='javascript' progress={100} />
          <Skills skill='HTML/CSS' progress={80} />
          <Skills skill='NodeJS' progress={50} />
          <Skills skill='React' progress={25} />
        </Cell>
      </Grid>
    </div>
  );
};

export default CV;
