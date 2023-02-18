import React, { useState } from 'react'
import { useSignup } from '../hooks/UseSignup'

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signup, error, isLoading } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    signup(email, password);
  }
  return (
    <form onSubmit={handleSubmit} className="signup">
      <h3>Sign Up</h3>

      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading} type="submit">Sign Up</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default Signup