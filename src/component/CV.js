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
            schoolDescription='Algorithm Analysis and Design
          Principal of Programming Language.
Data Structures and Programming Methodology
Software Engineering Methodology
Probability and Statistics
Computer Networks
Artificial Intelligence
'
          />

          <Education
            startYear={2007}
            endYear={2009}
            schoolName='My 2nd University'
            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
          <hr style={{ borderTop: '3px solid purple' }} />

          <h2>Experience</h2>

          <Experience
            startYear={2020}
            endYear={2019}
            jobName='Full Stack Developer -Code Your Future '
            jobDescription='Code Your Future is a 9 months full stack web developer training program which ends with a
fully working end product where React as front end and Node and sql as a back end.
During the last 6 weeks of the project we gain various experience working in a team ,flow
management and agile development.
● Developed programming skills through a full-time intensive bootcamp.
● TDD and pair programming practised throughout the course.
● Full-stack development learnt through lectures, sprints, assessments and projects
'
          />

          <Experience
            startYear={2017}
            endYear={2020}
            jobName='Self-employed- Ebay Seller'
            jobDescription='While I was raising my young family ,I was unable to go to work due to my childcare issue.I
        decided to work from home and after doing market research I figure out high end art craft supply
        gap in UK and decided to outsource small quantity and market on Ebay.This way I had made
      successful living out of this for about two years.
    ● Research customer requirements.
● Maintain website listing and inventory.
● Successfully dispatch the orders on time.
● Communicate with customers throughout.
Classroom assistant -Deepdale Community School-June-2016-May-2018
I started work as a volunteer in my local school to fill up a couple of hours in the afternoon and I
really enjoyed working with children .Therefore when there was a temporary contract role school
decided to give me a paid job.'
          />
          <hr style={{ borderTop: '3px solid purple' }} />
          <h2>Skills</h2>
          <Skills skill='javascript' progress={100} />
          <Skills skill='HTML/CSS' progress={80} />
          <Skills skill='NodeJS' progress={80} />
          <Skills skill='React' progress={85} />
          <Skills skill='SQL' progress={85} />
        </Cell>
      </Grid>
    </div>
  );
};

export default CV;
