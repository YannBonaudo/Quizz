import React,{ useState } from 'react';
import './Quizz.css';
import Questions from './Questions.json'
import Calvin from '../Assets/Photo C.jpeg';

function Quizz() {

    const [questionNumber,setQuestionNumber] = useState(0);
    const [quizzEnded,setQuizzEnded] = useState(false);

    function checkResult(answerId){
        console.log(answerId)
        const newNumber = questionNumber+1;
        if(answerId === Questions[questionNumber].correctAnswer){
            alert("Bravo !");
            if(questionNumber < 2){
                setQuestionNumber(newNumber);
            }
            else if (questionNumber === 2){
                setQuizzEnded(true);
            }
        } else {
            alert("Raté !");
        }
    }

    function shuffle(arr) {
        var i,
            j,
            temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;    
    };   

    shuffle(Questions[questionNumber].answers);
    
    return (
        <div>
            <h1>Quizz</h1>
            {
                quizzEnded === false &&
                <div>
                    <h2>{Questions[questionNumber].question}</h2>
                    <div className = "answer-div" >
                        {Questions[questionNumber].answers.map((answer)=>{
                            return <div onClick={() => checkResult(answer)}>{answer}</div>
                        })}
                    </div>
                </div>
            }
            { 
                quizzEnded === true &&
                <div>
                    <h2>Bravo ! Vous avez réussi le quizz.</h2>
                    <div>
                        <img src={Calvin} />
                    </div>
                </div>
            }
        </div>
    );
}

export default Quizz;
