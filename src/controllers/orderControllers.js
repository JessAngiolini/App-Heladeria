import connect from '../api/database';

export const createOrder = async (req, res) => {
  const { producto_id, cantidad } = req.body;

  if (!producto_id || !cantidad) {
    return res.status(400).send('Producto ID y cantidad son obligatorios');
  }

  try {
    const connection = await connect();

    // Obtener el precio del producto
    const [productResults] = await connection.execute('SELECT precio FROM products WHERE id = ?', [producto_id]);
    if (productResults.length === 0) {
      return res.status(404).send('Producto no encontrado');
    }

    const producto = productResults[0];
    const precio_total = producto.precio * cantidad;

    // Crear el pedido
    const [orderResults] = await connection.execute(
      'INSERT INTO orders (producto_id, cantidad, precio_total, estado) VALUES (?, ?, ?, ?)',
      [producto_id, cantidad, precio_total, 'Pendiente']
    );

    res.status(201).send('Pedido creado exitosamente');
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).send('Error al crear el pedido');
  }
};
