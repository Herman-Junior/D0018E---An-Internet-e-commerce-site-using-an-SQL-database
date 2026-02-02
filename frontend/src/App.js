// frontend/src/App.js
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('/api/test')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Error: ' + err.message));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Connection Test</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
