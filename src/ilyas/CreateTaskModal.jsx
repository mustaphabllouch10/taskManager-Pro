const CreateTaskModal = ({ isOpen, onClose }) => {
  // If the modal is not open, render nothing
  if (!isOpen) return null;

  return (
    // Modal background overlay
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Add New Task</h3>
        
        <form>
          {/* Task title input */}
          <div className="form-group">
            <label>Title</label>
            <input 
              type="text" 
              placeholder="Task title..." 
            />
          </div>
          
          {/* Task description input */}
          <div className="form-group">
            <label>Description</label>
            <textarea 
              placeholder="Details..." 
              rows="3">
            </textarea>
          </div>

          {/* Modal action buttons */}
          <div className="modal-actions">
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
              className="btn-save"
            >
              Save Task
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskModal;
