/* import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../config/database';

export const register = (req, res) => {
  const { dni, email, nombre, apellido, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) res.status(500).send(err);
    db.execute(
      'INSERT INTO users (dni, email, nombre, apellido, password_hash) VALUES (?, ?, ?, ?, ?)',
      [dni, email, nombre, apellido, hash],
      (err, results) => {
        if (err) res.status(500).send(err);
        res.status(200).send('Usuario registrado exitosamente');
      }
    );
  });
};

export const login = (req, res) => {
  const { dni, password } = req.body;
  db.execute(
    'SELECT * FROM users WHERE dni = ?',
    [dni],
    (err, results) => {
      if (err) res.status(500).send(err);
      if (results.length === 0) res.status(401).send('Usuario no encontrado');
      bcrypt.compare(password, results[0].password_hash, (err, isMatch) => {
        if (err) res.status(500).send(err);
        if (isMatch) {
          const token = jwt.sign({ id: results[0].id }, 'tu_secreto', { expiresIn: '1h' });
          res.status(200).send({ token });
        } else res.status(401).send('Contraseña incorrecta');
      });
    }
  );
};
 */

import {connect} from '../api/database'

export const getUsers = async (req,res) => {
  const[rows] = await (await connect()).execute('SELECT * FROM users')
  console.log(rows)
  res.send('hello word')
}