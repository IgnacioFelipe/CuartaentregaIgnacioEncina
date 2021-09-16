// Solicitar precio a pagar, agregar iva, mostrar precio final por alert, y mostrar un alert con precio con descuento de 100 

const sumarProductos = (a,b) => a + b;
const iva = (x) => x * 0.19;
const descuento = (x) => (x - 100);



    let precioProductos = parseFloat( prompt( "Ingresa valor a pagar"));


    let precioFinal = sumarProductos(
        precioProductos,
        iva(precioProductos),
        );

    let precioDescuento = descuento (
        precioFinal,

    )

    alert ("El monto total a pagar es " + '' + (precioFinal) );
    alert ("El precio con descuento es de " + (precioDescuento) ) ; 