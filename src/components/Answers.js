import Answer from "./Answer";
import "../index.css"

const Answers = ({answers}) => {
    return(
        <>
            {
                answers.map((a) => (
                    <Answer key={a.id} answer={a}></Answer>
                ))
            }
        </>
    )
}
export default Answers;