import React from 'react';
import {Avatar, Paper} from 'material-ui';
import logo from '../assets/thinking.svg';
import '../styles/about.css';
import dp from '../assets/dp.jpg';

const About = () => (
    <div id="about-content">
        <Paper zDepth={3} rounded={false} className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className="app-title">About Me</h1>
        </Paper>
        <Paper zDepth={3} rounded={false} id="about-paper">
            <p><Avatar src={dp} size={100} />
                Hi there! I'm a Computer Science graduate from the University of Auckland,
                seeking opportunities to work as a full-stack website developer or a software developer.
                I'm enthusiastic when it comes to learning new skills, especially when it relates to
                computers and other forms of technology. I enjoy making programs and have experiences with
                many programming languages.
            </p>
            <p>
                Why should you hire me, you may ask? Well, I am a motivated learner and passionate in what I do,
                especially when it comes to coding. I applied the things I learned during MSA programme to make
                a new website for my uncle to use for his business. I also enjoy working with a team and have experience
                in doing so during a hackfest hosted by Summer of Tech. During my internship with Kordia, I have learned
                many things, including how to use Vue JS Framework, Django Web Framework (Python), code development procedures
                (i.e. Agile) and the importance of documentations. I am confident to say that all the experiences I have gained
                during my internship will help develop my IT career.
            </p>
            <p>
                I hope to hear from you!
            </p>
        </Paper>
    </div>
);

export default About;
