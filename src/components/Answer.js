import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { motion } from 'framer-motion';

const Answer = ({answer}) => {
    return(
        <div className="answer-container">
            <div className="question-holder">
                <div>
                    <p className="question-holder-question">
                        <span className="bold">The Answer:</span>
                        {answer.answer}
                    </p>
                </div>
                <div>
                    <motion.p whileHover={{ scale: 1.25}}><FaTrash className="delete-icon"/></motion.p>
                    <motion.p whileHover={{ scale: 1.25}}><FaPen className="edit-icon"/></motion.p>
                    <motion.p whileHover={{ scale: 1.25}}><AiFillLike className="like-icon"></AiFillLike></motion.p>
                    <motion.p whileHover={{ scale: 1.25}}><AiFillDislike className="dislike-icon"></AiFillDislike></motion.p>
                </div>
            </div>
        </div>
    )
}
export default Answer;