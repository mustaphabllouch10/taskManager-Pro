const CreateTaskModal = ({ isOpen, onClose }) => {
  // If the modal is not open, render nothing
  if (!isOpen) return null;

  return (
    // Modal background overlay
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Header Section */}
        <h3 className="modal-title">Create New Task</h3>
        
        <form>
          {/* Main Title Input (Big input at the top) */}
          <div className="form-group">
            <input 
              type="text" 
              className="input-title"
              placeholder="What needs to be done?" 
            />
          </div>

          {/* Row 1: Status & Priority (Side by side) */}
          <div className="form-row">
            <div className="form-group half-width">
              <label>Status</label>
              <select className="dark-input">
                <option value="backlog">Backlog</option>
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>

            <div className="form-group half-width">
              <label>Priority</label>
              <select className="dark-input">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          {/* Row 2: Assignee & Due Date (Side by side) */}
          <div className="form-row">
            <div className="form-group half-width">
              <label>Assignee</label>
              <select className="dark-input">
                <option value="alex">Alex Design</option>
                <option value="sarah">Sarah Dev</option>
              </select>
            </div>

            <div className="form-group half-width">
              <label>Due Date</label>
              <input 
                type="date" 
                className="dark-input"
                defaultValue="2026-01-28"
              />
            </div>
          </div>
          
          {/* Description Textarea */}
          <div className="form-group">
            <textarea 
              className="dark-input"
              placeholder="Add a description..." 
              rows="4">
            </textarea>
          </div>

          {/* Footer: Action Buttons */}
          <div className="modal-actions">
            {/* Cancel Button */}
            <button 
              type="button" 
              onClick={onClose} 
              className="btn-cancel"
            >
              Cancel
            </button>

            {/* Button to submit and save the task */}
            <button 
              type="submit" 
              className="btn-create"
            >
              Create Task
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskModal;
