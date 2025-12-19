var btn_calcular = document.getElementById("btn_calcular");

let productos = [
    {
        nombre: "Consola PS5",
        precio: 800,
        categoria: "Tecnología"
    },
    {
        nombre: "Mueble Cocina",
        precio: 75,
        categoria: "Hogar"
    },
    {
        nombre: "Chompa Spiderman",
        precio: 45,
        categoria: "Ropa"
    },
    {
        nombre: "Chompa Spiderman2",
        precio: 45,
        categoria: "Ropa"
    }
];

function mostrarProductos() {
    let tbody = document.getElementById("tb_productos");
    tbody.innerHTML = "";

    productos.forEach(function (producto) {
        tbody.innerHTML += `
            <tr>
                <td>${producto.nombre}</td>
                <td>$${producto.precio.toFixed(2)}</td>
                <td>${producto.categoria}</td>
            </tr>
        `;
    });
}

btn_calcular.addEventListener("click", function (event) {

    function calcularTotal() {
        let total = 0;

        productos.forEach(function (producto) {
            total += producto.precio;
        });

        document.getElementById("total_pagar").innerHTML = "Total a pagar: $" + total.toFixed(2);
    }

    calcularTotal();

});


mostrarProductos();

