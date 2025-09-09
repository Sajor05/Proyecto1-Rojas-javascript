/*
--------------------------------
-- C L A S E  P R O D U C T O --
--------------------------------
*/

class Producto {
  constructor(nombre, codigo, precio, stock) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.precio = precio;
    this.stock = stock;
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

function crearProducto(boton) {
  return new Producto(
    boton.parentElement.querySelector(".nombre").textContent,
    boton.parentElement.querySelector(".codigo").textContent,
    boton.parentElement.querySelector(".precio").textContent,
    Number(boton.parentElement.querySelector(".stock").textContent)
  );
}

function verificarStock(producto) {
  const cantidad = carrito.filter((p) => p.codigo === producto.codigo).length;
  if (cantidad >= producto.stock) {
    alert(
      `¡No puedes agregar más unidades de ${producto.nombre}! Stock disponible: ${producto.stock}`
    );
    return false;
  }
  return true;
}

function agregarAlCarrito(producto) {
  carrito.push(producto);
  console.log("Producto agregado:", producto.getProducto());
  mostrarCarrito();
}

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const producto = crearProducto(boton);
    if (verificarStock(producto)) {
      agregarAlCarrito(producto);
    }
  });
});
