import React from 'react';
import FlatButton from 'material-ui/FlatButton';
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
            {props.row.map((cell) => {
                return (<GridCell cell={cell}/>);
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
            {props.grid.map((row) => {
                return (<GridRow row={row}/>);
            })}
        </div>
    );
}

export default class FlappyBird extends React.Component {
    constructor(props) {
        super(props);
        this.scoreStyle = {
            margin: 0,
            padding: '15px 0 0'
        }
        this.buttonStyle = {
            margin: '0 0 15px'
        }

        const gameHeight = 20;
        const gameWidth = 30;
        const skyColor = 'deepskyblue';
        const groundColor = 'forestgreen';
        const birdColor = 'yellow';
        this.birdInitHeight = 10;
        const birdPosition = 1;
        const towerColor = 'gray';
        const towerAmount = 16;
        const towerGap = 5;
        const minTowerHeight = 3;
        const maxTowerHeight = gameHeight / 2;

        var grid = [];
        for (let i = 0; i < gameHeight; i++) {
            if (i < gameHeight-5) {
                grid.push(new Array(gameWidth).fill(skyColor));
            } else {
                grid.push(new Array(gameWidth).fill(groundColor));
            }
        }

        var towers = [];
        var initialHeight = 0;
        var initialPosition = 2;
        var initialOnground = false;
        for (let i = 0; i < towerAmount; i++) {
            initialHeight = (i % 2 === 0) ?
                Math.floor(Math.random() * (maxTowerHeight - minTowerHeight)) + minTowerHeight
                : gameHeight - initialHeight - towerGap;
            initialOnground = i % 2 === 0;
            towers.push({height: initialHeight, position: initialPosition, onground: initialOnground});
            if (i % 2 === 1) {
                initialPosition += (initialPosition < 26) ? 4 : 3;  // min. index = 0, max. index = 29
            }
        }

        var bird = {
            height: this.birdInitHeight,
            position: birdPosition
        };
        grid[bird.height][bird.position] = birdColor;

        this.state = {grid: grid, towers: towers, bird: bird, crashed: false, score: 0};

        this.timerID = setInterval(() => {   // updates game every 0.2 sec
            if (this.state.crashed) {
                return
            }

            var gridCopy = [];
            for (let i = 0; i < gameHeight; i++) {
                if (i < gameHeight-5) {
                    gridCopy.push(new Array(gameWidth).fill(skyColor));
                } else {
                    gridCopy.push(new Array(gameWidth).fill(groundColor));
                }
            }

            var towersCopy = this.state.towers.slice();   // copy the array object, not pointer
            const generatedHeight = Math.floor(Math.random() * (maxTowerHeight - minTowerHeight)) + minTowerHeight;
            for (let i = 0; i < towersCopy.length; i++) {
                towersCopy[i].position--;
                if (towersCopy[i].position < 0) {
                    towersCopy[i].position = gameWidth-1;
                    towersCopy[i].height = (!towersCopy[i].onground) ? generatedHeight : gameHeight - generatedHeight - towerGap;
                }
            }
            
            for (let i = 0; i < towersCopy.length; i++) {
                for (let j = 0; j < towersCopy[i].height; j++) {
                    if (towersCopy[i].onground) {
                        gridCopy[gameHeight-j-1][towersCopy[i].position] = towerColor;
                    } else {
                        gridCopy[j][towersCopy[i].position] = towerColor;
                    }
                }
            }

            var birdCopy = this.state.bird;
            birdCopy.height++;   // bird goes down by gravity (inverse)

            var crashed = birdCopy.height < 0 || birdCopy.height > gameHeight-1;
            var reachedTower = false;
            for (let i = 0; i < gameHeight; i++) {
                if (gridCopy[i][bird.position] === towerColor) {
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

            gridCopy[birdCopy.height][birdCopy.position] = birdColor;

            this.setState({grid: gridCopy, towers: towersCopy, bird: birdCopy});
        }, 200);

        this.handleClick = this.handleClick.bind(this);
        this.handleSpace = this.handleSpace.bind(this);
        this.restart = this.restart.bind(this);
    }

    handleClick() {
        if (this.state.crashed) {
            return
        }
        var birdCopy = this.state.bird;
        birdCopy.height -= 3;   // bird flies up (inverse)
        this.setState({bird: birdCopy});
    }

    handleSpace(event) {
        if (event.keyCode === 32) {
            this.handleClick();
        }
    }
    
    restart() {
        var birdCopy = this.state.bird;
        birdCopy.height = this.birdInitHeight;
        this.setState({crashed: false, bird: birdCopy, score: 0});
    }

    componentDidMount(){
        document.addEventListener("keydown", this.handleSpace, false);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleSpace, false);
    }

    render() {
        return (
            <div id="flappy-bird">
                <h3 style={this.scoreStyle}>{this.state.score}</h3>
                <div onClick={this.handleClick}>
                    <Grid grid={this.state.grid}/>
                </div>
                {this.state.crashed ? 
                    <FlatButton onClick={this.restart} style={this.buttonStyle} label="Restart" icon={<Restore/>}/>
                    : null}
            </div>
        );
    }
}
