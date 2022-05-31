import './App.css';
import AddQuestion from './components/AddQuestion';
import Header from './components/Header';
import Questions from './components/Questions';

import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage';

import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const STORE_KEY = "question";

  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [showAddQuestion, setShowAddQuestion] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  const getQuestions = JSON.parse(localStorage.getItem(STORE_KEY));
  useEffect(() => {
    if(getQuestions == null){
      setQuestions([])
    } else {
      setQuestions(getQuestions)
    }
  }, [])

  /*
  useEffect(() => {
    function getQuestions(){
      return(JSON.parse(localStorage.getItem(STORE_KEY)))
    }
    getQuestions()
  },[])
  */

  const addQuestion = (q) => {
    let id = uuidv4();
    let newQuestion = {id, ...q};
    setQuestions([...questions, newQuestion]);
    Swal.fire({
      icon: 'success',
      title: 'Successfuly added a question',
      showConfirmButton: false,
      timer: 2000,
      position: 'center'
    });
    localStorage.setItem(STORE_KEY, JSON.stringify([...questions, newQuestion]));
  }

  const deleteQuestion = (id) => {
    Swal.fire({
      icon: 'info',
      title: 'Delete',
      text: 'Do you really want to delete this question?',
      confirmButtonText:'Delete',
      confirmButtonColor: '#e83b38',
      showCancelButton: true,
      cancelButtonText: 'Changed my mind',
      cancelButtonColor: '#23a6d8'
    }).then((res) =>{
      if(res.isConfirmed){
        let filtered = questions.filter((q) => q.id !== id);
        setQuestions(filtered);
        Swal.fire({
          icon: 'success',
          title: 'Successfuly deleted a question',
          timer: 2000,
          position: 'center',
          showConfirmButton: false
        })
        localStorage.setItem(STORE_KEY, JSON.stringify(filtered));
      } else {
        return;
      }
    })
  }

  const editQuestion = (id) => {
    Swal.fire({
      title: 'Edit Question',
      text: 'Write the new question',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Save changes',
      confirmButtonColor: '#e83b38',
      cancelButtonText: 'Changed my mind',
      cancelButtonColor: '#23a6d8',
      inputPlaceholder: 'New question...',
      preConfirm: (question) => {
        //let question = prompt("Question");
        let data = questions.map(q => {
          if(q.id === id){
            return {
              ...q,
              id: uuidv4(),
              author: q.author,
              question: question
            }
          }
          return q;
        })
        Swal.fire({
          icon: 'success',
          title: 'Successfully edited a question!',
          timer: 2000,
          position: 'center',
          showConfirmButton: false
        })
        localStorage.setItem(STORE_KEY, JSON.stringify(data));
        window.location.reload();
      }
    })
  }

  return (
    <>
      <Routes>
          <Route path='/'></Route>
          <Route path='*' element={<NotFoundPage/>}></Route>
        </Routes>
      {
        loading ?
        <div className='spinner-container'>
          <Spinner animation="border" role="status" size='20rem'></Spinner>
        </div>
        :
        <div>
          <Header makeForm={() => setShowAddQuestion(!showAddQuestion)} changer={showAddQuestion}></Header>
          <div className='container glassy'>
            {showAddQuestion && <AddQuestion onSave={addQuestion}></AddQuestion>}
            {questions.length > 0 ? (<Questions questions={questions} editQuestion={editQuestion} deleteQuestion={deleteQuestion}></Questions>) : (<p className='no-question-title'>No one was asking at the moment</p>)}
        </div>
        </div>
      }
    </>
  );
}

export default App;
