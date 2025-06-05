import React, { useState } from 'react';

const LoginPage = () => {
  const [role, setRole] = useState('user'); // 'user' or 'admin'
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    adminCode: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setForm({ email: '', username: '', password: '', adminCode: '' });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (role === 'user') {
      if (!form.email || !form.password) {
        setError('Please enter email and password.');
        return;
      }
      // User login logic here
      alert(`User logged in!\nEmail: ${form.email}`);
    } else {
      if (!form.username || !form.password || !form.adminCode) {
        setError('Please fill all admin fields.');
        return;
      }
      // Admin login logic here
      alert(`Admin logged in!\nUsername: ${form.username}`);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login Page</h2>
      <div>
        <label>
          <input
            type="radio"
            value="user"
            checked={role === 'user'}
            onChange={handleRoleChange}
          />
          User
        </label>
        <label style={{ marginLeft: '20px' }}>
          <input
            type="radio"
            value="admin"
            checked={role === 'admin'}
            onChange={handleRoleChange}
          />
          Admin
        </label>
      </div>
      <form onSubmit={handleSubmit} style={styles.form}>
        {role === 'user' && (
          <>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              style={styles.input}
            />
          </>
        )}
        {role === 'admin' && (
          <>
            <input
              type="text"
              name="username"
              placeholder="Admin Username"
              value={form.username}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="adminCode"
              placeholder="Admin Code"
              value={form.adminCode}
              onChange={handleChange}
              style={styles.input}
            />
          </>
        )}
        {error && <div style={styles.error}>{error}</div>}
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '350px',
    margin: '60px auto',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 8px #eee',
    background: '#fafafa'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px'
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px'
  },
  button: {
    padding: '10px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px'
  },
  error: {
    color: 'red',
    marginBottom: '10px'
  }
};

export default LoginPage;
