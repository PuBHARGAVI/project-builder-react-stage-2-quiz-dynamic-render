import React from 'react'
import question from './questions.json';
class QuizComponent extends React.Component {
    constructor(){
        super();
        this.state={
            questionno:0,
            questions:[...question],
            show:true
            }
        }
    componentDidMount() {
        document.body.style.backgroundColor="rgb(10, 10, 99)";
    }
    
    previousHandler(){
        var index=this.state.questionno;
        if(index>=1){
        this.setState({questionno:index-1})
        console.log(this.state.questions)
                }
            }
        
    nextHandler(){
        var index=this.state.questionno;
        if(index<this.state.questions.length-1){
        this.setState({questionno:index+1})
        }
    }
    quitHandler(){
        this.setState({show:false})
    }
    render() {
        return (
            this.state.show &&<div className="White-Container">
                <p id="questionStyle">Question</p>
                <div className="flex">
                    <div id="questionno">{this.state.questionno+1} of 15</div>
                    <div id="questionname">{this.state.questions[this.state.questionno].question}</div>
                </div>
                <div className="Option-Container">
                    <div className="options">
                        <button className="blue-button button-radius">{this.state.questions[this.state.questionno].optionA}</button>
                        <button className="blue-button button-radius">{this.state.questions[this.state.questionno].optionC}</button>
                    </div>
                    <div className="options">
                        <button className="blue-button button-radius">{this.state.questions[this.state.questionno].optionB}</button>
                        <button className="blue-button button-radius">{this.state.questions[this.state.questionno].optionD}</button>
                    </div>
                </div>
                <div className="Button-Container">
                    <button className="bluebackground-button" onClick={this.previousHandler.bind(this)}>Previous</button>
                    <button className="greenbackground-button" onClick={this.nextHandler.bind(this)}>Next</button>
                    <button className="palevioletred-button" onClick={this.quitHandler.bind(this)}>Quit</button>
                </div>
            </div>
        )
    };
}
export default QuizComponent;