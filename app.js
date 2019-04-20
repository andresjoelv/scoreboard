const name = 'Andres';
const myTitleID = 'main-title';
const desc = 'I just learned how to create a React node and render it into the DOM.';

const header = (
    <header>
        {/*this is a comment */}
        <h1 id={myTitleID}> {name}'s First React Element! </h1>
        <p className="main-desc"> {desc} </p>
        <input value={ 10 * 20 }/>
    </header>
)

ReactDOM.render( header, document.getElementById('root') );