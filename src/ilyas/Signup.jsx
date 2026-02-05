import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/tasksSlice';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords do not match! Please try again.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      dispatch(login({
        name: name,
        email: email
      }));
      navigate('/board');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="auth-container">
      <div className="auth-card" style={{ maxWidth: '480px' }}>

        {/* Header */}
        <div className="auth-header">
          <h2>Create an account</h2>
          <p>Start managing your tasks effectively today.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="auth-form">

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Create a full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Repeat password"
              value={confirmPassword}
              className={error ? 'input-error' : ''}
              onChange={(e) => {
                setConfirmPassword(e.target.value)
                if (error) setError('');
              }}
              required
            />
            {error && (
              <div className="error-message">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>{error}</span>
              </div>
            )}
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" required />
              <span>I agree to the <a href="#" className="forgot-password">Terms</a> & <a href="#" className="forgot-password">Privacy</a></span>
            </label>
          </div>

          <button type="submit" className="btn-auth-submit" disabled={isLoading}>
            {isLoading ? <span className="loader"></span> : 'Create Account'}
          </button>
        </form>

        {/* Divider */}
        <div className="auth-divider">
          <span>OR</span>
        </div>

        {/* Social Login */}
        <div className="social-login">
          <button type="button" className="btn-social">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width="20" />
            Sign up with Google
          </button>
          <button type="button" className="btn-social">
            <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" width="20" />
            Sign in with GitHub
          </button>
        </div>

        {/* Footer */}
        <div className="auth-footer">
          <p>Already have an account? <Link>Log in</Link></p>
        </div>

      </div>
    </div>
  );
};

export default Signup;