import React from 'react';

const LoginForm = (props) => {
  return (
    <div>
      <h3>{props.error}</h3>
      <ul>
        <li>
          Username:
          <input
            type='text'
            placeholder='Type "admin" here..'
            value={props.username}
            onChange={(e) => props.setUsername(e.target.value)}
          />
        </li>
        <li>
          Password:
          <input
            type='password'
            placeholder='Type "admin" here..'
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
          />
        </li>
        <li>
          <button onClick={() => props.submit()}>Login</button>
        </li>
      </ul>
    </div>
  );
};

LoginForm.propTypes = {
  error: React.PropTypes.string,
  username: React.PropTypes.string,
  password: React.PropTypes.string,
  setUsername: React.PropTypes.func.isRequired,
  setPassword: React.PropTypes.func.isRequired,
  submit: React.PropTypes.func.isRequired
};

export default LoginForm;
