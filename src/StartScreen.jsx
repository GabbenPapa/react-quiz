function StartScreen({ numQuestions }) {
  return (
    <div className="start-screen">
      <h2>Welcome to the Game!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui">Start</button>
    </div>
  );
}

export default StartScreen;
