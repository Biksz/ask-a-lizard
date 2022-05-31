import React from 'react';
import { useState } from 'react';
import Swal from "sweetalert2";
import { motion } from 'framer-motion';

const AddQuestion = ({ onSave }) => {

    const [author, setAuthor] = useState('');
    const [question, setQuestion] = useState('');

    const submitQuestion = (sq) => {
        sq.preventDefault();
        if(!author && !question){
            Swal.fire({
                icon: 'warning',
                title: 'Ooops',
                text: 'Fill the lines!',
                confirmButtonText: 'I got it'
            })
        } else if (!author && question){
            Swal.fire({
                icon: 'warning',
                title: 'Ooops',
                text: 'Fill the name!',
                confirmButtonText: 'I got it'
            })
        } else if(author && !question){
            Swal.fire({
                icon: 'warning',
                title: 'Ooops',
                text: 'Fill the question!',
                confirmButtonText: 'I got it'
            })
        } else {
            onSave({author, question})
        }
        setAuthor('');
        setQuestion('');
    }
  
    return (
        <form className='question-form' onSubmit={submitQuestion}>
            <div className='form-control-holder'>
                <div className='form-control'>
                    <label className="bold">Wo are you?</label>
                <input type='text' placeholder="I'm Batman" value={author} onChange={(a) => setAuthor(a.target.value)}/>
                </div>
                <div className='form-control'>
                    <label className="bold">Ask the question</label>
                    <input type='text' placeholder='Is the Moon made of cheese?' value={question} onChange={(q) => setQuestion(q.target.value)}/>
                </div>
            </div>
            <motion.input type='submit' className='btn-block' value='Add question' whileHover={{ scale: 1.15}}/>
        </form>
    )
}

export default AddQuestion;