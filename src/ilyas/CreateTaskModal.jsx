import { useState } from 'react';
import { addTask } from '../redux/tasksSlice';
import { useDispatch } from 'react-redux';
import { selectMembers } from "../redux/selectors";

const CreateTaskModal = ({ isOpen, onClose }) => {
  // 1. Redux dispatch and members selector
  const dispatch = useDispatch();
  const members = selectMembers();

  // 2. Form state
  const [formData, setFormData] = useState({
    title: '',
    status: 'todo', // Default value
    priority: 'medium',
    assigne: members[0]?.name || '',
    due: new Date().toISOString().split('T')[0],
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(task => ({
      ...task,
      [name]: value
    }));
  };

  // 3. Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTask(formData));

    // Reset form
    setFormData({
      title: '',
      description: '',
      status: 'todo',
      priority: 'medium',
      assigne: members[0]?.name || '',
      due: new Date().toISOString().split('T')[0]
    });

    onClose();
  };

  // If the modal is not open, render nothing
  if (!isOpen) return null;

  return (
    // Modal background overlay
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Header Section */}
        <h3 className="modal-title">Create New Task</h3>
        
        <form onSubmit={handleSubmit}>
          {/* Main Title Input (Big input at the top) */}
          <div className="form-group">
            <input 
                type="text" 
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="input-title"
                placeholder="What needs to be done?" 
                autoFocus
              />
          </div>

          {/* Row 1: Status & Priority */}
          <div className="form-row">
            <div className="form-group half-width">
              <label>Status</label>
              <select 
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="dark-input"
              >
                <option value="todo">To Do</option>
                <option value="inprogress">In Progress</option>
                <option value="inreview">In Review</option>
                <option value="done">Done</option>
              </select>
            </div>

            <div className="form-group half-width">
              <label>Priority</label>
              <select 
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="dark-input"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          {/* Row 2: Assignee & Due Date */}
          <div className="form-row">
            <div className="form-group half-width">
              <label>Assignee</label>
              <select 
                name="assigne"
                value={formData.assigne}
                onChange={handleChange}
                className="dark-input"
              >
                {/* Loop 3la members li f Redux */}
                {members.map(member => (
                  <option key={member.id} value={member.name}>
                    {member.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group half-width">
              <label>Due Date</label>
              <input 
                type="date" 
                name="due"
                value={formData.due}
                onChange={handleChange}
                className="dark-input"
              />
            </div>
          </div>
          
          {/* Description */}
          <div className="form-group">
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="dark-input"
              placeholder="Add a description..."
              rows="4">
            </textarea>
          </div>

          {/* Actions */}
          <div className="modal-actions">
            <button 
              type="button" 
              onClick={onClose} 
              className="btn-cancel"
            >
              Cancel
            </button>

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
