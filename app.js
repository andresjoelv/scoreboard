// React components are written in plain JavaScript, 
// with the help of JSX, and they contain the logic required to display a small part of your UI.

const players = [
    {
        id: 1,
        name: "Guil",
        score: 50
    },
    {
        id: 2,
        name: "Treasure",
        score: 85
    },
    {
        id: 3,
        name: "Ashley",
        score: 95
    },
    {
        id: 4,
        name: "James",
        score: 80
    } 
];

function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
}

// Component as an arrow function
const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">{ props.name }</span>
            <Counter />
        </div>
    );
}

class Counter extends React.Component {

    state = {
        score: 0
    };

    incrementScore() {
        console.log('Hi, from inside incrementScore!');
    };

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{ this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    }
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header 
                title="Scoreboard"
                totalPlayers={props.initialPlayers.length}
            />

            {/* PLayers list */}
            { props.initialPlayers.map( player => 
                <Player 
                    name={player.name}
                    key={player.id.toString()}
                />
            )}
        </div>
    );
}

ReactDOM.render( 
    <App 
        initialPlayers={players}
    />, // what do I want to render 
    document.getElementById('root') // where do I want to render it
);