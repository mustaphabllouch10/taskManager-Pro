/**
 * Global header - logo, nav links, search, and New Task button.
 * Hides search/button on landing page for cleaner hero layout.
 */
import { useState } from 'react';
import CreateTaskModal from './CreateTaskModal';
import { selectSearch, selectIsAuthenticated, selectUser } from '../redux/selectors';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, logout } from '../redux/tasksSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchTerm = useSelector(selectSearch);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const isActive = (path) => {
    return location.pathname === path ? "nav-item active" : "nav-item";
  };

  return (
    <>
      <header className="header-container">

        {/* Left section: Logo and Navigation */}
        {/* Wider layout on landing page; compact on other routes */}
        <div className="header-left">
          <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
            <img src="/taskmanager-pro-logo.png" alt="TaskManager Pro Logo" className="logo-image" />
          </Link>

          {isAuthenticated && (
            <nav className="nav-links">
              <Link to="/board" className={isActive('/board')}>Board</Link>
              <Link to="/analysis" className={isActive('/analysis')}>Analysis</Link>
              <Link to="/team" className={isActive('/team')}>Team</Link>
            </nav>
          )}
        </div>

        {/* Right section: Search bar and New Task button */}
        {/* Search/button hidden on landing (opacity: 0) to avoid clutter */}
        <div className="header-right">
          {isAuthenticated ? (
            <>
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

              {/* User Profile & Logout */}
              <div className="user-profile">
                <img src={user.avatar} alt="User" className="user-avatar" />
                <button className="btn-logout" onClick={handleLogout} title="Logout">
                  ↪
                </button>
              </div>
            </>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="btn-signup">Log in</Link>
            </div>
          )}
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