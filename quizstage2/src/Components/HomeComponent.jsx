import React, { Component } from 'react'
class HomeComponent extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = "rgb(0,0,139)";
    }
    render() {
        return (
            <div className="Page-Container">
                <h1 className="white-text">Quiz App</h1>
                <button type="button" className="green-button button-radius">Play</button>
            </div>
        )
    }
}
export default HomeComponent;
