import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [memoContent, setMemoContent] = useState([]);

  useEffect(() => {
    axios.get('/api/memo').then((res) => {
      setMemoContent(res.data);
    })
  }, []);

  return (
    <div className="App">
      <h1>Memo</h1>
      <div className="memo-container">
        {memoContent.map(el =>
          <div key={el.id} className="cont">
            {el.content}
          </div>
        )}
      </div>
    </div>
  )
}

export default App;
