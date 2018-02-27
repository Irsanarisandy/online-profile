import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Divider, Drawer, FlatButton, IconButton, MenuItem} from 'material-ui';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionWork from 'material-ui/svg-icons/action/work';
import CommunicationContacts from 'material-ui/svg-icons/communication/contacts';
import '../styles/navbar.css';
import GitHubIcon from './github-logo';
import LinkedInIcon from './linkedin-logo';

const RightIcons = (props) => (
    <div className="navIcons">
        <Link to='/'>
            <FlatButton label="Home" icon={<ActionHome/>} />
        </Link>
        <Link to='/projects'>
            <FlatButton label="Projects" icon={<ActionWork/>} />
        </Link>
        <Link to='/contact'>
            <FlatButton label="Contact" icon={<CommunicationContacts/>} />
        </Link>
        <FlatButton id="clock-nav-full" label={props.localtime} />
    </div>
);

export default class CustomNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.links = {
            github: "https://github.com/irsanarisandy",
            linkedin: "https://nz.linkedin.com/in/irsan-arisandy-72008b117"
        }
        this.state = {date: new Date(), open: false};
        this.handleToggle = this.handleToggle.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date: new Date()});
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <div id="custom-nav">
                <div id="drawer">
                    <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                        <h3 className="drawer-item">Please Hire Me</h3>
                        <p className="drawer-item">{this.state.date.toLocaleTimeString()}</p>
                        <Divider />
                        <Link to='/' className="drawer-item">
                            <MenuItem>{<ActionHome/>}Home</MenuItem>
                        </Link>
                        <Divider />
                        <Link to='/projects' className="drawer-item">
                            <MenuItem>{<ActionWork/>}Projects</MenuItem>
                        </Link>
                        <Divider />
                        <Link to='/contact' className="drawer-item">
                            <MenuItem>{<CommunicationContacts/>}Contact</MenuItem>
                        </Link>
                        <Divider />
                        <div className="drawer-item">
                            <IconButton href={this.links.github} target="_blank">
                                {<GitHubIcon/>}
                            </IconButton>
                            <IconButton href={this.links.linkedin} target="_blank">
                                {<LinkedInIcon/>}
                            </IconButton>
                        </div>
                        <Divider />
                        <p className="drawer-item">Irsan Arisandy &#64; {this.state.date.getFullYear()}</p>
                    </Drawer>
                </div>
                <AppBar id="navbarShort" className="navbar" title="Please Hire Me" onLeftIconButtonClick={this.handleToggle}
                    iconElementRight={<FlatButton id="clock-nav-short" label={this.state.date.toLocaleTimeString()}/>} />
                <AppBar id="navbarFull" className="navbar" title="Please Hire Me" iconElementLeft={<div/>}
                    iconElementRight={<RightIcons localtime={this.state.date.toLocaleTimeString()}/>} />
            </div>
        );
    }
}
