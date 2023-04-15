import React, { useState } from 'react';
import "./App.css";
//import SignUpForm from 'SignUpForm';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let errorList = [];

    if (!email) {
      errorList.push('Email field is required.');
    }

    if (!name) {
      errorList.push('Name field is required.');
    }

    if (!password) {
      errorList.push('Password field is required.');
    }

    if (!confirmPassword) {
      errorList.push('Confirm Password field is required.');
    }

    if (password !== confirmPassword) {
      errorList.push('Passwords do not match.');
    }

    setErrors(errorList);

    if (errorList.length === 0) {
      // Submit form to server
      console.log('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors.length > 0 && (
        <div>
          {errors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      )}
 
      <label htmlFor="email"> Email:  </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="name"> Name:  </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="password">Password:  </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label htmlFor="confirmPassword">Confirm Password:  </label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpForm;
