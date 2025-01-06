import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = ({ match }) => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put('http://localhost:3000/reset-password', {
        token: match.params.token,
        newPassword: password,
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage('Error restableciendo la contraseña');
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Restablecer Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Nueva Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Restablecer Contraseña</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
