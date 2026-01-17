import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [like, setLike] = useState(false) 
  const [flag, setFlag] = useState(false)

  // onChange handlers (NO preventDefault here)
  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  // onSubmit handler (preventDefault ONLY here)
  const handleLogin = (e) => {
    e.preventDefault()

    if (email === "" || password === "" || name === "") {
      alert("Please fill all fields")
    } else {
      alert("Login successful!")
    }
  }

  const clearData = () => {
    setName("")
    setEmail("")
    setPassword("")
  }

  const handleLike = () => {
    setLike(true)
  }

  const handleDislike = () => {
    setLike(false)
  }

  const handleCard = () => {
    setFlag(true)
  }

  return (
    <>
      <div className='form_container'>

        <form onSubmit={handleLogin}>

          <input
            className='inputfield'
            type="text"
            placeholder='Enter your name'
            value={name}
            onChange={handleName}
          />

          <br />

          <input
            className='inputfield'
            type="email"
            placeholder='Enter your email'
            value={email}
            onChange={handleEmail}
          />

          <br />

          <input
            className='inputfield'
            type="password"
            placeholder='Enter your password'
            value={password}
            onChange={handlePassword}
          />

          <br />

          <button className='btn' type='submit'>SUBMIT</button>

        </form>

      </div>

      <button className='btn' onClick={handleCard}>Show Card</button>

      {flag &&
        <div className='card'>
          <p>{name}</p>
          <p>{email}</p>
          <p>{password}</p>

          <button className='btn' onClick={clearData}>Clear Data</button>

          {like ?
            <div>
              <p>Liked</p>
              <button className='btn' onClick={handleDislike}>Dislike</button>
            </div>
            :
            <div>
              <p>Disliked</p>
              <button className='btn' onClick={handleLike}>Like</button>
            </div>
          }
        </div>
      }
    </>
  )
}

export default App
