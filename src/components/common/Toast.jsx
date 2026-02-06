/**
 * Toast notification - shows success/error messages from Redux.
 * Auto-dismisses after 5s. User can also click close.
 */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideNotification } from '../../redux/slices/tasksSlice';
import { selectNotification } from '../../redux/selectors';

const Toast = () => {
  const dispatch = useDispatch();
  const notif = useSelector(selectNotification);

  useEffect(() => {
    if (notif.show) {
      const timer = setTimeout(() => {
        dispatch(hideNotification());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notif.show, dispatch]);

  if (!notif.show) return null;

  return (
    <div className={`toast-container ${notif.type}`}>
      <div className="toast-icon">
        {notif.type === 'success' ? '✓' : '⚠'}
      </div>
      <p className="toast-message">{notif.message}</p>
      <button
        className="toast-close"
        onClick={() => dispatch(hideNotification())}
      >
        &times;
      </button>
    </div>
  );
};

export default Toast;