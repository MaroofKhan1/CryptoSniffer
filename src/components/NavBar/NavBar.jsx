import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'
import Search from '../Search/Search';

export default function NavBar({ user, setUser, handleSearch }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }
  
  return (
    <nav>
        <div className='nav-container'>
          <div className='search-bar' >
            {/* <h1><span className='colors'></span></h1> */}
            <Search handleSearch={handleSearch} />
          </div>
          <span>Welcome, {user.name}</span>
          &nbsp; | &nbsp;
          <Link to="/Home">Home</Link>
          &nbsp; | &nbsp;
          <Link to="/WatchList">Watch List</Link>
          &nbsp; | &nbsp;
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        </div>
    </nav>
  );
}