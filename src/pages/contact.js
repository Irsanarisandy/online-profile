import React from 'react';
import {Avatar, Chip, Divider, Paper, RaisedButton} from 'material-ui';
import logo from '../assets/thinking.svg';
import CV from '../assets/CV.pdf';
import CVIcon from '../components/cv-logo';
import EmailIcon from '../components/email-logo';
import GitHubIcon from '../components/github-logo';
import LinkedInIcon from '../components/linkedin-logo';
import '../styles/contact.css';

const LeftArea = () => (
    <Paper zDepth={3} rounded={false} id="contact-left-area" className="contact-two-papers">
        <div id="skills-area">
            <h3>Skills:</h3>
            <Divider />
            <h4>Web Development</h4>
            <div className="chip-container">
                <Chip className="chips"><Avatar size={32}>R</Avatar>React</Chip>
                <Chip className="chips"><Avatar size={32}>V</Avatar>Vue</Chip>
                <Chip className="chips"><Avatar size={32}>T</Avatar>TypeScript</Chip>
                <Chip className="chips"><Avatar size={32}>J</Avatar>JavaScript</Chip>
                <Chip className="chips"><Avatar size={32}>H</Avatar>HTML5</Chip>
                <Chip className="chips"><Avatar size={32}>S</Avatar>SASS/SCSS</Chip>
                <Chip className="chips"><Avatar size={32}>L</Avatar>LESS</Chip>
                <Chip className="chips"><Avatar size={32}>C</Avatar>CSS3</Chip>
            </div>
            <Divider />
            <h4>General Programming</h4>
            <div className="chip-container">
                <Chip className="chips"><Avatar size={32}>P</Avatar>Python</Chip>
                <Chip className="chips"><Avatar size={32}>J</Avatar>Java</Chip>
                <Chip className="chips"><Avatar size={32}>C</Avatar>C#</Chip>
            </div>
            <Divider />
            <h4>Database</h4>
            <div className="chip-container">
                <Chip className="chips"><Avatar size={32}>P</Avatar>PostgreSQL</Chip>
                <Chip className="chips"><Avatar size={32}>T</Avatar>T-SQL</Chip>
                <Chip className="chips"><Avatar size={32}>M</Avatar>MySQL</Chip>
                <Chip className="chips"><Avatar size={32}>S</Avatar>SQLite</Chip>
            </div>
            <Divider />
            <h4>Others</h4>
            <div className="chip-container">
                <Chip className="chips"><Avatar size={32}>G</Avatar>Git</Chip>
                <Chip className="chips"><Avatar size={32}>P</Avatar>Photoshop</Chip>
                <Chip className="chips"><Avatar size={32}>W</Avatar>MS Word</Chip>
                <Chip className="chips"><Avatar size={32}>E</Avatar>MS Excel</Chip>
                <Chip className="chips"><Avatar size={32}>P</Avatar>MS Powerpoint</Chip>
            </div>
        </div>
    </Paper>
);

const PeoplePapers = () => (
    <div id="people-papers">
        <Paper zDepth={3} className="people-paper">
            <div>
                <Avatar size={70} src={logo} />
                <h3>Irsan Arisandy</h3>
                <p>Front-end Developer</p>
            </div>
        </Paper>
        <Paper zDepth={3} className="people-paper">
            <div>
                <Avatar size={70} src={logo} />
                <h3>Irsan Arisandy</h3>
                <p>Back-end Developer</p>
            </div>
        </Paper>
        <Paper zDepth={3} className="people-paper">
            <div>
                <Avatar size={70} src={logo} />
                <h3>Irsan Arisandy</h3>
                <p>Software Developer</p>
            </div>
        </Paper>
        <Paper zDepth={3} className="people-paper">
            <div>
                <Avatar size={70} src={logo} />
                <h3>Irsan Arisandy</h3>
                <p>Meme Enthusiast</p>
            </div>
        </Paper>
    </div>
);

const links = {
    email: "mailto:irsanarisandy@hotmail.com",
    github: "https://github.com/irsanarisandy",
    linkedin: "https://nz.linkedin.com/in/irsan-arisandy-72008b117"
}

const PaperArea = () => (
    <div id="contact-area">
        <PeoplePapers />
        <div id="contact-top-area">
            <RaisedButton className="contact-button" backgroundColor="#EE3F24" labelColor="#FFFFFF" href={CV} target="_blank" label="CV" icon={<CVIcon/>} />
            <RaisedButton className="contact-button" backgroundColor="#0085E0" labelColor="#FFFFFF" href={links.email} label="Email" icon={<EmailIcon/>} />
            <RaisedButton className="contact-button" backgroundColor="#000000" labelColor="#FFFFFF" href={links.github} target="_blank" label="GitHub" icon={<GitHubIcon/>} />
            <RaisedButton className="contact-button" backgroundColor="#006097" labelColor="#FFFFFF" href={links.linkedin} target="_blank" label="LinkedIn" icon={<LinkedInIcon/>} />
        </div>
        <LeftArea />
        <Paper zDepth={3} rounded={false} id="contact-right-area" className="contact-two-papers">
            <div>
                <h3>My CV:</h3>
                <RaisedButton className="contact-button" backgroundColor="#EE3F24" labelColor="#FFFFFF" href={CV} target="_blank" label="CV" icon={<CVIcon/>} />
                <h3>My Email:</h3>
                <RaisedButton className="contact-button" backgroundColor="#0085E0" labelColor="#FFFFFF" href={links.email} label="Email" icon={<EmailIcon/>} />
                <h3>Follow Me:</h3>
                <RaisedButton className="contact-button" backgroundColor="#000000" labelColor="#FFFFFF" href={links.github} target="_blank" label="GitHub" icon={<GitHubIcon/>} />
                <RaisedButton className="contact-button" backgroundColor="#006097" labelColor="#FFFFFF" href={links.linkedin} target="_blank" label="LinkedIn" icon={<LinkedInIcon/>} />
            </div>
        </Paper>
    </div>
);

const Contact = () => (
    <div id="contact-content">
        <Paper zDepth={3} rounded={false} className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className="app-title">Contact</h1>
            <p className="app-intro">
                If you need someone to do your job, feel free to contact me&nbsp;
                <span role="img" aria-label="grin">&#128512;</span>
            </p>
        </Paper>
        <PaperArea />
    </div>
);

export default Contact;
