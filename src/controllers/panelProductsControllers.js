import connect from '../api/database';

export const getProducts = async (req, res) => {
  try {
    const connection = await connect();
    const [results] = await connection.execute('SELECT * FROM products');
    res.status(200).json(results);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).send('Error al obtener productos');
  }
};

export const addProduct = async (req, res) => {
  const { categoria, nombre, descripcion, imagen_url, precio } = req.body;
  if (!categoria || !nombre || !descripcion || !imagen_url || !precio) {
    return res.status(400).send('Todos los campos son obligatorios');
  }

  try {
    const connection = await connect();
    const [results] = await connection.execute(
      'INSERT INTO products (categoria, nombre, descripcion, imagen_url, precio) VALUES (?, ?, ?, ?, ?)',
      [categoria, nombre, descripcion, imagen_url, precio]
    );
    res.status(201).send('Producto añadido exitosamente');
  } catch (err) {
    console.error("Error adding product:", err);
    res.status(500).send('Error al añadir producto');
  }
};
