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
            <FlatButton label="Home" icon={props.allIcons.actionhome} />
        </Link>
        <Link to='/projects'>
            <FlatButton label="Projects" icon={props.allIcons.actionwork} />
        </Link>
        <Link to='/contact'>
            <FlatButton label="Contact" icon={props.allIcons.communicationcontacts} />
        </Link>
        <FlatButton id="clock-nav-full" label={props.localtime} />
    </div>
);

class NavbarLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleToggle = this.handleToggle.bind(this);
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
                        <p className="drawer-item">{this.props.date.toLocaleTimeString()}</p>
                        <Divider />
                        <Link to='/' className="drawer-item">
                            <MenuItem>{this.props.allIcons.actionhome}Home</MenuItem>
                        </Link>
                        <Divider />
                        <Link to='/projects' className="drawer-item">
                            <MenuItem>{this.props.allIcons.actionwork}Projects</MenuItem>
                        </Link>
                        <Divider />
                        <Link to='/contact' className="drawer-item">
                            <MenuItem>{this.props.allIcons.communicationcontacts}Contact</MenuItem>
                        </Link>
                        <Divider />
                        <div className="drawer-item">
                            <IconButton href={this.props.links.github} target="_blank">
                                {this.props.allIcons.github}
                            </IconButton>
                            <IconButton href={this.props.links.linkedin} target="_blank">
                                {this.props.allIcons.linkedin}
                            </IconButton>
                        </div>
                        <Divider />
                        <p className="drawer-item">Irsan Arisandy &#64; {this.props.date.getFullYear()}</p>
                    </Drawer>
                </div>
                <AppBar id="navbarShort" className="navbar" title="Please Hire Me" onLeftIconButtonClick={this.handleToggle}
                    iconElementRight={<FlatButton id="clock-nav-short" label={this.props.date.toLocaleTimeString()}/>} />
                <AppBar id="navbarFull" className="navbar" title="Please Hire Me" iconElementLeft={<div/>}
                    iconElementRight={<RightIcons allIcons={this.props.allIcons} links={this.props.links} localtime={this.props.date.toLocaleTimeString()}/>} />
            </div>
        );
    }
}

export default class CustomNavbar extends React.Component {
    constructor() {
        super();
        this.allIcons = {
            actionhome: <ActionHome />,
            actionwork: <ActionWork />,
            communicationcontacts: <CommunicationContacts />,
            github: <GitHubIcon />,
            linkedin: <LinkedInIcon />
        };
        this.links = {
            github: "https://github.com/irsanarisandy",
            linkedin: "https://nz.linkedin.com/in/irsan-arisandy-72008b117"
        }
        this.state = {date: new Date()};
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

    render() {
        return (
            <NavbarLayout allIcons={this.allIcons} links={this.links} date={this.state.date} />
        );
    }
}
