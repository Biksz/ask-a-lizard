import Question from "./Question";
import "../index.css"

const Questions = ({questions, editQuestion, deleteQuestion}) => {
    return(
        <>
            {
                questions.map((q) => (
                    <Question key={q.id} question={q} deleteQuestion={deleteQuestion} editQuestion={editQuestion}></Question>
                ))
            }
        </>
    )
}
export default Questions;