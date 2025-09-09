/*
--------------------------------
-- C L A S E  P R O D U C T O --
--------------------------------
*/

class Producto {
  constructor(nombre, codigo, precio) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.precio = precio;
  }

  getProducto() {
    return `${this.nombre} ${this.codigo} $${this.precio}`;
  }
}

/*
                        ---------------------------------------
                        -- A G R E G A R  A L  C A R R I T O --
                        ---------------------------------------
*/

/*
----------------------------------
-- M O S T R A R  C A R R I T O --
----------------------------------
*/

function mostrarCarrito() {
  const lista = document.getElementById("carrito-lista");
  const totalSpan = document.getElementById("total");
  let total = 0;
  lista.innerHTML = "";

  carrito.forEach((producto) => {
    const li = document.createElement("li");
    li.textContent = producto.getProducto();
    lista.appendChild(li);
    total += Number(producto.precio.replace("$", ""));
  });
  totalSpan.textContent = total;
}

/*
------------------------------------
-- S C R I P T  P R I N C I P A L --
------------------------------------
*/

let carrito = new Array();
const botones = document.querySelectorAll(".agregar");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    //Sube una etiqueta arriba y busca adentro de esa etiqueta los span
    let producto = new Producto(
      boton.parentElement.querySelector(".nombre").textContent,
      boton.parentElement.querySelector(".codigo").textContent,
      boton.parentElement.querySelector(".precio").textContent
    );
    carrito.push(producto);
    console.log("Producto agregado:", producto);
    mostrarCarrito();
  });
});

console.log(carrito);
