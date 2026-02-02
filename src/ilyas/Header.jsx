import { useState } from 'react';
import CreateTaskModal from './CreateTaskModal';
import { selectSearch } from '../redux/selectors';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/tasksSlice';

const Header = () => {
  // State to store the search input value
  const dispatch = useDispatch();
  const searchTerm = selectSearch();
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  // control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle search input change
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <>
      <header className="header-container">

        {/* Left section: Logo and Navigation */}
        <div className={isLandingPage ? "header-left-LandingPage" : "header-left"}>
          <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
            <img src="/taskmanager-pro-logo.png" alt="TaskManager Pro Logo" className="logo-image" />
          </Link>
          
          <nav className="nav-links">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/board" className="nav-item">Board</Link>
            <Link to="/analysis" className="nav-item">Analysis</Link>
            <Link to="/team" className="nav-item">Team</Link>
          </nav>
        </div>

        {/* Right section: Search bar and New Task button */}
        <div className={isLandingPage ? "header-right-LandingPage" : "header-right"}>

          {/* Search input field */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm || ''}
              onChange={handleSearch}
            />
          </div>

          {/* Button to open the Create Task modal */}
          <button
            className="btn-new-task"
            onClick={() => setIsModalOpen(true)}
          >
            + New Task
          </button>
        </div>
      </header>

      {/* Create Task Modal component */}
      <CreateTaskModal
        isOpen={isModalOpen} // isOpen controls visibility
        onClose={() => setIsModalOpen(false)} // onClose closes the modal
      />
    </>
  );
};

export default Header;