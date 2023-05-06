class Carrito {
  constructor() {
    this.montoTotal = 0;
    this.productos = [];
  }

  agregarProducto(nombre, precio, unidades) {
    const producto = { nombre, precio, unidades };
    this.productos.push(producto);
    this.montoTotal += precio * unidades;
  }
}
