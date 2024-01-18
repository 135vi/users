import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    fetch('https://jsonplaceholder.typicode.com/users')
      .finally(() => setLoading(false))
      .then(response => response.json())
      .then(users => setUsers(users))
      .catch(error => setError(error.toString()))
  }, [])

  return (
    <div className="App">
      {
        loading ? <h1>Loading...</h1> :
          error ? <p>Error: { error }</p> :
          users.map(user => (<>
            <h5>{ user.name }</h5>
            <p>{ user.email }</p>
          </>))
      }
    </div>
  );
}

export default App;
