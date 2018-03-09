import React from 'react';
import {Dialog, FlatButton} from 'material-ui';
import Help from 'material-ui/svg-icons/action/help-outline';
import Restore from 'material-ui/svg-icons/action/restore';

function GridCell(props) {
    const style = {
        width: 20,
        height: 20,
        border: '1px solid',
        backgroundColor: props.cell
    }

    return (<div style={style}/>);
}

function GridRow(props) {
    const style = {
        display: 'flex'
    }

    return (
        <div style={style}>
            {props.row.map((cell, index) => {
                return (<GridCell cell={cell} key={"c" + index.toString()}/>);
            })}
        </div>
    );
}

function Grid(props) {
    const style = {
        display: 'inline-block',
        margin: 20
    }

    return (
        <div style={style}>
            {props.grid.map((row, index) => {
                return (<GridRow row={row} key={"r" + index.toString()}/>);
            })}
        </div>
    );
}

export default class FlappyBird extends React.Component {
    constructor() {
        super();
        this.scoreStyle = {
            margin: 0,
            padding: '15px 0 0'
        }
        this.buttonStyle = {
            margin: '0 5px 15px'
        }
        this.gameHeight = 20;
        this.gameWidth = 30;
        this.skyColor = 'deepskyblue';
        this.groundColor = 'forestgreen';
        this.birdColor = 'yellow';
        this.birdInitHeight = 10;
        this.birdPosition = 1;
        this.towerColor = 'gray';
        this.towerAmount = 16;
        this.towerInitPos = this.birdPosition + 1;
        this.towerHeightGap = 5;
        this.towerPosDistance = 4;
        this.minTowerHeight = 3;
        this.maxTowerHeight = this.gameHeight / 2;

        let grid = [];
        for (let i = 0; i < this.gameHeight; i++) {
            if (i < this.gameHeight-5) {
                grid.push(new Array(this.gameWidth).fill(this.skyColor));
            } else {
                grid.push(new Array(this.gameWidth).fill(this.groundColor));
            }
        }

        let towers = [];
        let initialHeight = 0;
        let initialPosition = this.towerInitPos;
        let initialOnground = false;
        for (let i = 0; i < this.towerAmount; i++) {
            initialHeight = (i % 2 === 0) ?
                Math.floor(Math.random() * (this.maxTowerHeight - this.minTowerHeight)) + this.minTowerHeight
                : this.gameHeight - initialHeight - this.towerHeightGap;
            initialOnground = i % 2 === 0;
            towers.push({height: initialHeight, position: initialPosition, onground: initialOnground});
            if (i % 2 === 1) {
                // min. index = 0, max. index = 29
                initialPosition += (initialPosition < 26) ? this.towerPosDistance : this.towerPosDistance-1;
            }
        }

        const bird = {
            height: this.birdInitHeight,
            position: this.birdPosition
        };
        grid[bird.height][bird.position] = this.birdColor;

        this.state = {grid: grid, towers: towers, bird: bird, crashed: false, score: 0, open: false};

        this.handleClick = this.handleClick.bind(this);
        this.handleSpace = this.handleSpace.bind(this);
        this.restart = this.restart.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount(){
        document.addEventListener("keydown", this.handleSpace, false);

        this.timerID = setInterval(() => {   // updates game every 0.2 sec
            if (this.state.crashed) {
                return
            }

            let gridCopy = [];
            for (let i = 0; i < this.gameHeight; i++) {
                if (i < this.gameHeight-5) {
                    gridCopy.push(new Array(this.gameWidth).fill(this.skyColor));
                } else {
                    gridCopy.push(new Array(this.gameWidth).fill(this.groundColor));
                }
            }

            let towersCopy = this.state.towers.slice();   // copy the array object, not pointer
            const generatedHeight = Math.floor(Math.random() * (this.maxTowerHeight - this.minTowerHeight)) + this.minTowerHeight;
            for (let i = 0; i < towersCopy.length; i++) {
                towersCopy[i].position--;
                if (towersCopy[i].position < 0) {
                    towersCopy[i].position = this.gameWidth-1;
                    towersCopy[i].height = (!towersCopy[i].onground) ? generatedHeight : this.gameHeight - generatedHeight - this.towerHeightGap;
                }
            }
            
            for (let i = 0; i < towersCopy.length; i++) {
                for (let j = 0; j < towersCopy[i].height; j++) {
                    if (towersCopy[i].onground) {
                        gridCopy[this.gameHeight-j-1][towersCopy[i].position] = this.towerColor;
                    } else {
                        gridCopy[j][towersCopy[i].position] = this.towerColor;
                    }
                }
            }

            let birdCopy = this.state.bird;
            birdCopy.height++;   // bird goes down by gravity (inverse)

            let crashed = birdCopy.height < 0 || birdCopy.height > this.gameHeight-1;
            let reachedTower = false;
            for (let i = 0; i < this.gameHeight; i++) {
                if (gridCopy[i][this.birdPosition] === this.towerColor) {
                    reachedTower = true;

                    if (birdCopy.height === i) {
                        crashed = true;
                    }
                }
            }
            if (crashed) {
                this.setState({crashed: true});
            } else if (reachedTower) {
                this.setState({score: this.state.score + 1});
            }

            gridCopy[birdCopy.height][birdCopy.position] = this.birdColor;

            this.setState({grid: gridCopy, towers: towersCopy, bird: birdCopy});
        }, 200);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleSpace, false);
        clearInterval(this.timerID);
    }

    handleClick(event) {
        event.preventDefault();
        if (this.state.crashed) {
            return
        }
        let birdCopy = this.state.bird;
        birdCopy.height -= 3;   // bird flies up (inverse)
        this.setState({bird: birdCopy});
    }

    handleSpace(event) {
        event.preventDefault();
        if (event.keyCode === 32) {
            this.handleClick(event);
        }
    }
    
    restart() {
        let birdCopy = this.state.bird;
        birdCopy.height = this.birdInitHeight;
        this.setState({crashed: false, bird: birdCopy, score: 0});
    }

    handleOpen() {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
    }

    render() {
        return (
            <div id="flappy-bird">
                <h3 style={this.scoreStyle}>{this.state.score}</h3>
                <div onClick={this.handleClick}>
                    <Grid grid={this.state.grid}/>
                </div>
                <FlatButton onClick={this.handleOpen} style={this.buttonStyle} label="How To Play" icon={<Help/>}/>
                <Dialog title="How To Play:" actions={<FlatButton onClick={this.handleClose} label="Close"/>} modal={false}
                    open={this.state.open} onRequestClose={this.handleClose}>
                    <p>Simply left click on the game, or press space, to fly up.</p>
                    <p>The aim of the game is to avoid as many of the towers as possible.</p>
                </Dialog>
                {this.state.crashed ? 
                    <FlatButton onClick={this.restart} style={this.buttonStyle} label="Restart" icon={<Restore/>}/>
                    : null}
            </div>
        );
    }
}
