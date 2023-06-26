import { useState } from 'react'

const AddUser = ({ onAdd }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!username) {
      alert('Please enter username & password')
      return
    }

    onAdd({username, password})

    setUsername('')
    setPassword('')
  }

  return (
    <form className='add-form'>
    <div className='form-control'>
      {/* <label>Task</label> */}
      <input
        type='text'
        placeholder='Username'
        style={{width: 200, height: 30, textAlign: 'center', margin: 20}}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
    <div className='form-control'>
      {/* <label>Day & Time</label> */}
      <input
        type='text'
        placeholder='Password'
        style={{width: 200, height: 30, textAlign: 'center'}}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>

    <input type='submit' value='Sign up!' className='btn' style={{width: 100, backgroundColor: 'white', margin: 20, textAlign: 'center',  border: 'solid', borderWidth: 3}} />
    </form>
  )
}

export default AddUser
