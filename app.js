// React components are written in plain JavaScript, 
// with the help of JSX, and they contain the logic required to display a small part of your UI.

const players = [
    {
        name: "Guil",
        score: 50
    },
    {
        name: "Treasure",
        score: 85
    },
    {
        name: "Ashley",
        score: 95
    },
    {
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
            <Counter 
                score={ props.score }
            />
        </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
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
                    score={player.score}
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