class Carrito {
  constructor() {
    this.montoTotal = 0;
    this.productos = [];
  }

  agregarProducto(nombre, precio, unidades) {
    const productoExistente = this.productos.find(
      (producto) => producto.nombre === nombre
    );
    if (productoExistente) {
      productoExistente.unidades += unidades;
      console.log(
        `Ya existe ${nombre} en el carrito y tiene ${productoExistente.unidades} unidades`
      );
    } else {
      const producto = { nombre, precio, unidades };
      this.productos.push(producto);
      this.montoTotal += precio * unidades;
    }
  }
}
