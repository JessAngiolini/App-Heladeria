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

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await connect();
    const [results] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
    if (results.length === 0) {
      return res.status(404).send('Producto no encontrado');
    }
    res.status(200).json(results[0]);
  } catch (err) {
    console.error("Error fetching product by id:", err);
    res.status(500).send('Error al obtener producto');
  }
};
