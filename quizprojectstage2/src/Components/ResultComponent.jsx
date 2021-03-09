import React from 'react'
class ResultComponent extends React.Component {
    componentDidMount() {
        document.body.style.backgroundColor = "rgb(0,0,139)";
    }
    render() {
        return (
            <div>    
                <h1 id="green">Result</h1>
            <div className="White-Container1">
                <h2 align="center">You need more practice!</h2>
                <h1 id="score" align="center">Your Score:20%</h1>
                <p align="left" id="left">Total Number of questions:</p>
                <p align="right" id="right">15</p>
                <p align="left" id="left">Number of attempted questions:</p>
                <p align="right" id="right">9</p>
                <p align="left" id="left">Number of Correct Answers:</p>
                <p align="right" id="right">3</p>
                <p align="left" id="left">Number of Wrong Answers:</p>
                <p align="right" id="right">6</p>
            </div>
            <div className="Footer-Container">
                <button className="darkbluebackground-button" id="again">Play Again</button>
                <button className="darkbluebackgroundgreen-button" id="home">Back To Home</button>
            </div>
            </div>
        )
    }
}
export default ResultComponent;
