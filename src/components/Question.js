import React, { useEffect, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { motion } from 'framer-motion';
import { v4 as uuidv4} from 'uuid';
import AddAnswer from "./AddAnswer";
import Answers from './Answers'

const Question = ({question, editQuestion, deleteQuestion}) => {

    const KEY = 'answer';

    const [answers, setAnswers] = useState([]);

    const getAnswers = JSON.parse(localStorage.getItem(KEY));
    useEffect(() => {
        if(getAnswers == null){
            setAnswers([])
        } else {
            setAnswers(getAnswers)
        }
    }, [])

    const addAnswer = (a) => {
        let id = uuidv4();
        let newAnswer = {id, ...a};
        setAnswers([...answers, newAnswer]);
        localStorage.setItem(KEY, JSON.stringify([...answers, newAnswer]));
    }

    return(
        <div className="question-container">
            <div className="question-holder">
                <div>
                    <p className="question-holder-author">
                        <span className="bold">Author:</span>
                        {question.author}
                    </p>
                    <p className="question-holder-question">
                        <span className="bold">The question:</span>
                        {question.question}
                    </p>
                </div>
                <div>
                    <motion.p whileHover={{ scale: 1.25}}><FaTrash className="delete-icon" onClick={() => deleteQuestion(question.id)}/></motion.p>
                    <motion.p whileHover={{ scale: 1.25}}><FaPen className="edit-icon" onClick={() => editQuestion(question.id)}/></motion.p>
                </div>
            </div>
            <div>
                <AddAnswer onSave={addAnswer}></AddAnswer>
                {answers.length > 0 ? (<Answers answers={answers}></Answers>) : (<p>No answers</p>)}
            </div>
        </div>
    )
}
export default Question;