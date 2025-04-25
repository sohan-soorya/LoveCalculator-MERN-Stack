import { useState } from "react";

function App(){
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const calculatelove = () =>{
    if (!name1 || !name2){
      setResult("Please enter both names");
      return;
    }
    const percentage = Math.floor(Math.random() * 100) + 1;
    setResult(`Love between ${name1} and ${name2} is ✨${percentage}%✨`);
  };

  return(
    <div className="wrapper">
    <div className="container">
      <h1>❤️‍🔥Love Calculator❤️‍🔥</h1>
      <input
      type="text"
      placeholder="Name 1"
      value={name1}
      onChange={(e) => setName1(e.target.value)}
      />
      <br/>
      <input
      type="text"
      placeholder="Name 2"
      value={name2}
      onChange={(e) => setName2(e.target.value)}
      />
      <br/>

      <button onClick={calculatelove}>Calculate your Love💘</button>
      {result && <h2 className="result">{result}</h2>}
    </div>
    </div>
  );
}

export default App;