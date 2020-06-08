import React,{ useState } from 'react';
import './Quizz.css';
import Questions from './Questions.json'

function Quizz() {

    const [questionNumber,setQuestionNumber] = useState(0);

    function checkResult(answerId){
        console.log(answerId)
        const newNumber = questionNumber+1;
        if(answerId === Questions[questionNumber].correctAnswer){
            alert("Bravo !");
            setQuestionNumber(newNumber);
        } else {
            alert("Raté !");
        }
    }


    return (
        <div>
            <h1>Quizz</h1>
            <h1>{Questions[questionNumber].question}</h1>
            <div className = "answer-div" >
                {Questions[questionNumber].answers.map((answer)=>{
                    return <div onClick={() => checkResult(answer)}>{answer}</div>
                })}
            </div>
        </div>
    );
}

export default Quizz;
