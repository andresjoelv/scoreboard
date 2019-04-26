// React components are written in plain JavaScript, 
// with the help of JSX, and they contain the logic required to display a small part of your UI.

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

    decrementScore = () => {
        this.setState( prevState => ({
            score: prevState.score - 1 
        }));
    };

    incrementScore = () => {
        this.setState( prevState => {
            return {
                score: prevState.score + 1
            }; 
        });
    };

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <span className="counter-score">{ this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    }
}

class App extends React.Component {

    state = {
        players: [
            {
                id: 1,
                name: "Guil"
            },
            {
                id: 2,
                name: "Treasure"
            },
            {
                id: 3,
                name: "Ashley"
            },
            {
                id: 4,
                name: "James"
            } 
        ]
    };

    render() {

        return (
            <div className="scoreboard">
                <Header 
                    title="Scoreboard"
                    totalPlayers={this.state.players.length}
                />

                {/* PLayers list */}
                { this.state.players.map( player => 
                    <Player 
                        name={player.name}
                        key={player.id.toString()}
                    />
                )}
            </div>
        );
    }
}

ReactDOM.render( 
    <App />, // what do I want to render 
    document.getElementById('root') // where do I want to render it
);