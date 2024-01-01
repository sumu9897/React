
const App = () => {

  let marks=90;
  return (
    <div>
      {
      marks>80?
      <h1>Brilliant Result</h1>
      :
      <h1>Average result</h1>
      }
    </div>
  );
};

export default App;