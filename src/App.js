import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ApiService from './api'

function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const service = new ApiService()

  const submitBtnClick = async() => {
    try {
      console.log(email)
      let response = await service.login({ email, password })

      console.log(response.data)
    } catch(err) {
      console.log(err)
      alert(err.message)
    }
  }

  return (
    <div className="App">
      <div>
        <input type="text" value={email} onChange={(val) => setEmail(val.target.value)}/>
      </div>
      <div>
        <input type="password" value={password} onChange={(val) => setPassword(val.target.value)} />
      </div>
      <button onClick={submitBtnClick}>Submit</button>
    </div>
  );
}

export default App;
