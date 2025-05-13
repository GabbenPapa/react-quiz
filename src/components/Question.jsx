import Options from "./Options";

function Question({ question }) {
  return (
    <div className="question">
      <h4>{question.question}</h4>
      <Options question={question}>{question}</Options>
    </div>
  );
}

export default Question;
