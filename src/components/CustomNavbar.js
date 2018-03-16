import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Divider, Drawer, FlatButton, IconButton, MenuItem} from 'material-ui';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionSubject from 'material-ui/svg-icons/action/subject';
import ActionWork from 'material-ui/svg-icons/action/work';
import CommunicationContacts from 'material-ui/svg-icons/communication/contacts';
import {GitHubLogo, LinkedInLogo} from './logos-and-icons';
import '../styles/navbar.css';

const NavElements = (props) => {
    switch(props.type.toUpperCase()) {
        case 'RIGHT_FLATBUTTON':
            return (
                <Link to={props.link}>
                    <FlatButton label={props.label} icon={props.icon}/>
                </Link>
            );
        case 'DRAWER_MENUITEM':
            return (
                <Link to={props.link}>
                    <MenuItem>{props.icon}{props.label}</MenuItem>
                </Link>
            );
        case 'DRAWER_ICONBUTTON':
            return (
                <IconButton href={props.link} target="_blank">
                    {props.icon}
                </IconButton>
            );
        default:
            return null;
    }
}

const RightElements = (props) => (
    <div className="navIcons">
        {props.links.internal.map((item) => {
            return (<NavElements type='RIGHT_FLATBUTTON' key={"n_" + item.label} {...item} />);
        })}
        <FlatButton id="clock-nav-full" label={props.localtime} />
    </div>
);

export default class CustomNavbar extends React.Component {
    constructor() {
        super();
        this.state = {date: new Date(), open: false};
        this.links = {
            internal: [{
                link: '/',
                icon: <ActionHome/>,
                label: 'Home'
            }, {
                link: '/about',
                icon: <ActionSubject/>,
                label: 'About'
            }, {
                link: '/projects',
                icon: <ActionWork/>,
                label: 'Projects'
            }, {
                link: '/contact',
                icon: <CommunicationContacts/>,
                label: 'Contact'
            }],
            external: [{
                link: "https://github.com/irsanarisandy",
                icon: <GitHubLogo/>,
                key: "GitHubLogo"
            }, {
                link: "https://nz.linkedin.com/in/irsan-arisandy-72008b117",
                icon: <LinkedInLogo/>,
                key: "LinkedInLogo"
            }]
        };
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
                        <h3 className="drawer-item">Irsan's Profile</h3>
                        <p className="drawer-item">{this.state.date.toLocaleTimeString()}</p>
                        <Divider />
                        {this.links.internal.map((item) => {
                            return (<div className="drawer-item" key={"d_" + item.label}><NavElements type='DRAWER_MENUITEM' {...item}/><Divider/></div>);
                        })}
                        <div className="drawer-item">
                            {this.links.external.map((item) => {
                                return <NavElements type='DRAWER_ICONBUTTON' key={item.key} {...item} />;
                            })}
                        </div>
                        <Divider />
                        <p className="drawer-item">Irsan Arisandy &#169; {this.state.date.getFullYear()}</p>
                    </Drawer>
                </div>
                <AppBar id="navbarShort" className="navbar" title="Irsan's Profile" onLeftIconButtonClick={this.handleToggle}
                    iconElementRight={<FlatButton id="clock-nav-short" label={this.state.date.toLocaleTimeString()}/>} />
                <AppBar id="navbarFull" className="navbar" title="Irsan's Profile" iconElementLeft={<div/>}
                    iconElementRight={<RightElements links={this.links} localtime={this.state.date.toLocaleTimeString()}/>} />
            </div>
        );
    }
}
