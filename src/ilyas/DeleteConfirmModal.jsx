/**
 * Confirmation dialog before deleting a task.
 * Prevents accidental deletion. Renders nothing when closed.
 */
const DeleteConfirmModal = ({ isOpen, task, onConfirm, onCancel }) => {
    if (!isOpen || !task) return null;

    return (
      <div className="modal-overlay" onClick={onCancel}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <h3 className="modal-title">Delete Task?</h3>
          <p>Are you sure you want to delete "{task.title}"?
            <br />
            This action cannot be undone.</p>
          <div className="modal-actions">
            <button className="btn-cancel" onClick={onCancel}>Cancel</button>
            <button className="btn-delete" onClick={() => onConfirm(task.id)}>Delete</button>
          </div>
        </div>
      </div>
    );
  };

export default DeleteConfirmModal;