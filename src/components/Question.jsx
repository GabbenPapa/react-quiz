import Options from "./Options";

function Question({ question, dispatch, answer }) {
  return (
    <div className="question">
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer}>
        {question}
      </Options>
    </div>
  );
}

export default Question;
