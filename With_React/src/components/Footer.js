import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{position: 'fixed', left: 0, bottom: 0, right: 0}}>
      <p>Credit: <a href="https://www.freepik.com/free-photo/beach-chair_1114661.htm#from_view=detail_alsolike">Image by mrsiraphol</a> on Freepik</p>
      <p>Copyright &copy; 2023</p>
      {/* <Link to='/about'>About</Link> */}
    </footer>
  )
}

export default Footer
