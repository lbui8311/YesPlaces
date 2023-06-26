import User from './User'

const Users = ({ users, onDelete, onToggle }) => {
  return (
    <>
      {users.map((user, index) => (
        <User key={index} user={user} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default Users
