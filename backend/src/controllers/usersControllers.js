import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connect from "../api/database";

export const saveRegister = async (req, res) => {
  const { dni, email, nombre, apellido, user_password } = req.body;
  if (!dni || !email || !nombre || !apellido || !user_password) {
    return res.status(400).send("Todos los campos son obligatorios");
  }

  try {
    const connection = await connect();
    const hash = await bcrypt.hash(user_password, 10);
    const [results] = await connection.execute(
      "INSERT INTO users (dni, email, nombre, apellido, password_hash) VALUES (?, ?, ?, ?, ?)",
      [dni, email, nombre, apellido, hash]
    );
    res.status(200).send("Usuario registrado exitosamente");
  } catch (err) {
    res.status(500).send("Error al registrar usuario");
  }
};

export const LoginCtrl = async (req, res) => {
  const { dni, user_password } = req.body;

  try {
    const connection = await connect();
    const [results] = await connection.execute(
      "SELECT * FROM users WHERE dni = ?",
      [dni]
    );

    if (results.length === 0) {
      return res.status(401).send("Usuario no encontrado");
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(user_password, user.user_password);

    if (isMatch) {
      const token = jwt.sign({ id: user.id }, "tu_secreto", {
        expiresIn: "1h",
      });
      return res.status(200).send({ token });
    } else {
      return res.status(401).send("Contraseña incorrecta");
    }
  } catch (err) {
    return res.status(500).send("Error al iniciar sesión");
  }
};

export const getUsers = async (req, res) => {
  const db = await connect();
  const [rows] = await db.query("SELECT * from users");
  res.json(rows);
};
