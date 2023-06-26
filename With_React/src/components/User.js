import { FaTimes } from 'react-icons/fa'

const User = ({user, onDelete, onToggle }) => {
  return (
    <div
      className={`user ${user.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(user.id)}
    >
      <h3>
        {user.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(user.id)}
        />
      </h3>
      <p>{user.day}</p>
    </div>
  )
}

export default User
