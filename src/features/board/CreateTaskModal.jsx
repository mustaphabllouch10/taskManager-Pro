/**
 * Modal for creating new tasks.
 * Resets form on close so stale data is not shown when reopened.
 */
import { useState } from 'react';
import { addTask, showNotification } from '../../redux/slices/tasksSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectMembers } from "../../redux/selectors";

// Shared initial values - used on mount and when closing
const getInitialFormData = (members) => ({
  title: '',
  status: 'todo',
  priority: 'medium',
  assignee: members[0]?.name || '',
  due: new Date().toISOString().split('T')[0],
  description: '',
});

const CreateTaskModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const members = useSelector(selectMembers);

  const [formData, setFormData] = useState(() => getInitialFormData(members));

  const handleClose = () => {
    setFormData(getInitialFormData(members));
    onClose();
  };

  // Single handler for all inputs via name attribute
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
    if (!formData.title) return;

    dispatch(addTask(formData));

    dispatch(showNotification({
      message: 'New task added successfully!',
      type: 'success'
    }));

    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      {/* Stop propagation so clicking inside modal doesn't close it */}
      <div className="modal-content" onClick={e => e.stopPropagation()}>
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
                name="assignee"
                value={formData.assignee}
                onChange={handleChange}
                className="dark-input"
              >
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
            >
            </textarea>
          </div>

          {/* Actions */}
          <div className="modal-actions">
            <button
              type="button"
              onClick={handleClose}
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
