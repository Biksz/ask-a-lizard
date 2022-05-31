import React from 'react';
import { useState } from 'react';
import Swal from "sweetalert2";

const AddAnswer = ({onSave}) => {

    const [answer, setAnswer] = useState('');

    const submitAnswer = (sa) => {
        sa.preventDefault();
        if(!answer){
            Swal.fire({
                icon: 'warning',
                title: 'Ooops',
                text: 'Fill the answer!'
            })
        } else {
            onSave({answer})
        }
        setAnswer('');
    }
    return(
        <form onSubmit={submitAnswer}>
            <div className='answer-control'>
                <label className="bold">Answer:</label>
                <input type='text' placeholder='yes' value={answer} onChange={(a) => setAnswer(a.target.value)}/>
            </div>
            <input type='submit' className='ansver-btn' value='Add answer'/>
        </form>
    )
}
export default AddAnswer;