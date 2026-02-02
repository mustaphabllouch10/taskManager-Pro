/**
 * Global header - logo, nav links, search, and New Task button.
 * Hides search/button on landing page for cleaner hero layout.
 */
import { useState } from 'react';
import CreateTaskModal from './CreateTaskModal';
import { selectSearch } from '../redux/selectors';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../redux/tasksSlice';

const Header = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearch);
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <>
      <header className="header-container">

        {/* Left section: Logo and Navigation */}
        {/* Wider layout on landing page; compact on other routes */}
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
        {/* Search/button hidden on landing (opacity: 0) to avoid clutter */}
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
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Header;