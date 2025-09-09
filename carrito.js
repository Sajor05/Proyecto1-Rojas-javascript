class Producto {
  constructor(nombre, codigo, precio) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.precio = precio;
  }

  getProducto() {
    return "${this.nombre} ${this.codigo} $${this.precio}";
  }
}

let carrito = new Array();

const botones = document.querySelectorAll(".agregar");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    //Sube una etiqueta arriba y busca adentro de esa etiqueta un h5 y
    //guarda el texto que contiene el h5
    const producto = boton.parentElement.querySelector("h5").textContent;
    carrito.push(producto);
    console.log("Producto agregado:", producto);
  });
});

console.log(carrito);
