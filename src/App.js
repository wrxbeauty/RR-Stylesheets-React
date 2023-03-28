import './App.css';

const styledText = {
  fontSize: "25px",
  textAlign: "center",
  margin: "40px",
  border: "1px solid green"
};

function App() {
  return (
    <div className="App">
      <h1 style={styledText}>Hello World</h1>
    </div>
  );
}

export default App;
