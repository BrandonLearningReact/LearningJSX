//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


//Create React component
const App = () => {
    return(
        <div>
            <label className="label" htmlFor="name">
                Enter Name:
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white'}}>
                Submit
            </button>
        </div>
    );
};

//show the react component on screen
ReactDOM.render(
        <App />,
        document.querySelector('#root')
);
