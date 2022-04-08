import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [advice, setAdvice] = useState('')
  const url='	https://api.adviceslip.com/advice';
  useEffect(()=>{
    fetchAdvice()
  },[])
  const fetchAdvice=()=>{
    axios.get(url).then(res=>{
      setAdvice(res.data.slip.advice)
    }).catch(err=>{
      setAdvice(err)
    })
  }
  return (
    <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button onClick={fetchAdvice} className="button">
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
    </div>
  );
}

export default App;
