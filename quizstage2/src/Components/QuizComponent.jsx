import React from 'react'
import question from './questions.json';
class QuizComponent extends React.Component {
    constructor(){    
        super();
    this.state={
        currentquestion:"Which is the only mammal that can’t jump?", 
        optionA: "Dog",
        optionB: "Elephant",
        optionC: "Goat",
        optionD: "Lion",
        answer: "Elephant",
        questionno:1
        };
    }
    
    // componentWillMount(){
    //     this.setState({questionno:1, currentquestion:"Which is the only mammal that can’t jump?", optionA:"Dog", optionB:"Elephant", optionC:"Goat",optionD:"Lion",answer:"Elephant"});
    // }
    componentDidMount() {
        document.body.style.backgroundColor = "rgb(0,0,139)";
    }
    
    previousHandler(){
        for(var i=0;i<question.length;i++){
            if(question[i].question===this.state.currentquestion){
                if(i>=1){
                this.setState({questionno:this.state.questionno-1, currentquestion:question[i-1].question, optionA:question[i-1].optionA, optionB:question[i-1].optionB, optionC:question[i-1].optionC,optionD:question[i-1].optionD,answer:question[i-1].answer});
                }
            }
        }
        
        
    }
    nextHandler(){
        for(var i=0;i<question.length;i++){
            if(question[i].question===this.state.currentquestion){
                if(i>=1){
                    this.setState({questionno:this.state.questionno+1,currentquestion:question[i+1].question, optionA:question[i+1].optionA, optionB:question[i+1].optionB, optionC:question[i+1].optionC,optionD:question[i+1].optionD,answer:question[i+1].answer});
                }
            }
        }
    }
    quitHandler(){

    }
    render() {
        return (
            <div class="White-Container">
                <h1>Question</h1>
                <p id="question">{this.state.questionno} of 15</p>
                <p align="center">{this.state.question}</p>
                <div className="Option-Container">
                    <div class="options">
                        <button className="blue-button button-radius">{this.state.optionA}</button>
                        <button className="blue-button button-radius">{this.state.optionB}</button>
                    </div>
                    <div class="options">
                        <button className="blue-button button-radius">{this.state.optionC}</button>
                        <button className="blue-button button-radius">{this.state.optionD}</button>
                    </div>
                </div>
                <div class="Button-Container">
                    <button class="bluebackground-button" onClick={this.previousHandler}>Previous</button>
                    <button class="greenbackground-button" onClick={this.nextHandler}>Next</button>
                    <button class="palevioletred-button" onClick={this.quitHandler}>Quit</button>
                </div>
            </div>
        )
    };
}
export default QuizComponent;