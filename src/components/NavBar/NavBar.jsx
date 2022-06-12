import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'
import Search from '../Search/Search';

export default function NavBar({ user, setUser, handleSearch }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  
  return (
    <nav className='nav'>
        <div className='nav-content'>
        {/* <img className='elon' src="" alt="" /> */}
          <div className='nav-logo'>
            <Search handleSearch={handleSearch} />
          </div>
          <div className='nav-content'>
            <span className='welcome'>Welcome, {user.name}</span>
            &nbsp; | &nbsp;
            <Link to="/">Home</Link>
            &nbsp; | &nbsp;
            <Link to="/WatchList">Watch List</Link>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
          </div>
        </div>
    </nav>
  );
}