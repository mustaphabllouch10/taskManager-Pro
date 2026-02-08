import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/tasksSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      dispatch(login({ email, password }));
      navigate('/board');
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card auth-card--login">

        {/* Header */}
        <div className="auth-header">
          <h2>log in to your account</h2>
          <p>Start managing your tasks effectively today.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="auth-form">

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-auth-submit" disabled={isLoading}>
            {isLoading ? <span className="loader"></span> : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;