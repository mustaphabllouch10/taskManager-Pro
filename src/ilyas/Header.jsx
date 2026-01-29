import { useState } from 'react';
import CreateTaskModal from './CreateTaskModal';
import { Link } from 'react-router-dom';

const Header = () => {
  // State to store the search input value
  const [searchTerm, setSearchTerm] = useState('');

  // control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header className="header-container">

        {/* Left section: Logo and Navigation */}
        <div className="header-left">
          <div className="logo">
            <h2>TaskPro</h2>
          </div>

          <nav className="nav-links">
            {/* <Link to="/team" className="nav-item">Team</Link>  */}
            <Link to="/analysis" className="nav-item">Analysis</Link>
            {/* <Link to="/" className="nav-item active">Main Screen</Link> */}
          </nav>
        </div>
        
        {/* Right section: Search bar and New Task button */}
        <div className="header-right">

          {/* Search input field */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
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
