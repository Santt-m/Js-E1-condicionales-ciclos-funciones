// Menú de navegación
document.addEventListener("DOMContentLoaded", () => {
    // Obtenemos los elementos del DOM
    const btnNav = document.querySelector(".btn-nav");
    const nav = document.querySelector("nav");

    // Agregamos un evento de clic al botón
    btnNav.addEventListener("click", () => {
        // Verificamos si el menú está abierto
        if (!nav.classList.contains("fx")) {
            // Añadimos las clases necesarias para abrir el menú
            nav.classList.add("fx", "slideDown");
            nav.classList.remove("slideUp");
            // Esperamos a que se complete la animación y quitamos las clases
            setTimeout(() => {
                nav.classList.remove("slideDown");
            }, 490);
            // Mostramos un mensaje en la consola
            console.log("Menú abierto");
        } else {
            // Si el menú está cerrado, cerramos el menú
            nav.classList.remove("slideDown");
            nav.classList.add("slideUp");

            // Esperamos a que se complete la animación y quitamos las clases
            setTimeout(() => {
                nav.classList.remove("fx");
                nav.classList.remove("slideUp");
            }, 490);

            // Mostramos un mensaje en la consola
            console.log("Menú cerrado");
        }
    });
});

// 1 - Función para verificar si un número es par o impar
function verificarParidad() {
    // Obtenemos el valor del input y lo convertimos a entero
    const numero = parseInt(document.getElementById('numero1').value, 10);
    // Verificamos si el valor es un número válido
    if (isNaN(numero)) {
        console.log("Por favor, introduce un número válido.");
    } else if (numero % 2 === 0) { // Si el número es divisible por 2, es par
        console.log(`${numero} es par`);
    } else { // De lo contrario, es impar
        console.log(`${numero} es impar`);
    }
}

// 2 - Función para comparar dos números
function compararNumeros() {
    // Obtenemos los valores de los inputs y los convertimos a enteros
    const numero1 = parseInt(document.getElementById('numero2_1').value, 10);
    const numero2 = parseInt(document.getElementById('numero2_2').value, 10);

    // Verificamos si los valores son números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        console.log("Por favor, introduce dos números válidos.");
    } else if (numero1 > numero2) {
        console.log(`${numero1} es mayor que ${numero2}`);
    } else if (numero1 < numero2) {
        console.log(`${numero2} es mayor que ${numero1}`);
    } else {
        console.log(`${numero1} y ${numero2} son iguales`);
    }
}

// 3 - Función para verificar si un número es múltiplo de 5
function esMultiploDeCinco() {
    // Obtenemos el valor del input y lo convertimos a entero
    const numero = parseInt(document.getElementById('numero3').value, 10);
    // Verificamos si el valor es un número válido
    if (isNaN(numero)) {
        console.log("Por favor, introduce un número válido.");
    } else if (numero % 5 === 0) { // Si el número es divisible por 5, es múltiplo de 5
        console.log(`${numero} es múltiplo de 5`);
    } else { // De lo contrario, no es múltiplo de 5
        console.log(`${numero} no es múltiplo de 5`);
    }
}

// 4 - Función para imprimir todos los números desde el 0 hasta el número introducido
function imprimirHasta() {
    // Obtenemos el valor del input y lo convertimos a entero
    const numero = parseInt(document.getElementById('numero4').value, 10);
    // Verificamos si el valor es un número válido
    if (isNaN(numero)) {
        console.log("Por favor, introduce un número válido.");
    } else {
        // Iteramos desde el 0 hasta el número introducido y mostramos cada número por consola
        for (let i = 0; i <= numero; i++) {
            console.log(i);
        }
    }
}

// 5 - Función para imprimir una palabra la cantidad de veces indicada
function imprimirPalabra() {
    // Obtenemos los valores de los inputs
    const palabra = document.getElementById('palabra').value;
    const cantidad = parseInt(document.getElementById('cantidad').value, 10);
    // Verificamos si los valores son válidos
    if (isNaN(cantidad) || palabra.trim() === "") {
        console.log("Por favor, introduce una palabra válida y una cantidad válida.");
    } else {
        // Iteramos la cantidad de veces y mostramos la palabra por consola
        for (let i = 0; i < cantidad; i++) {
            console.log(palabra);
        }
    }
}

// 6 - Función para imprimir todos los valores de un array
function imprimirArray() {
    // Obtenemos los valores de los inputs y los convertimos en un array
    const array = document.getElementById('array6').value.split(',').map(item => item.trim());
    // Verificamos si el array tiene al menos un valor válido
    if (array.length === 0 || array[0] === "") {
        console.log("Por favor, introduce un array válido.");
    } else {
        // Iteramos el array y mostramos cada valor por consola
        array.forEach(valor => console.log(valor));
    }
}

// 7 - Función para imprimir todos los valores de un array excepto el quinto
function imprimirArraySinQuinto() {
    // Obtenemos los valores de los inputs y los convertimos en un array
    const array = document.getElementById('array7').value.split(',').map(item => item.trim());
    // Verificamos si el array tiene 10 valores válidos
    if (array.length !== 10 || array[0] === "") {
        console.log("Por favor, introduce un array de 10 números válidos.");
    } else {
        // Iteramos el array y mostramos cada valor por consola salvo el quinto
        array.forEach((valor, indice) => {
            if (indice !== 4) {
                console.log(valor);
            }
        });
    }
}

// 8 - Función para multiplicar cada valor de un array por un número
function multiplicarArray() {
    // Obtenemos los valores de los inputs y los convertimos en un array de números
    const array = document.getElementById('array8').value.split(',').map(item => parseFloat(item.trim()));
    const multiplicador = parseFloat(document.getElementById('multiplicador').value);
    // Verificamos si el array y el multiplicador son válidos
    if (array.some(isNaN) || isNaN(multiplicador)) {
        console.log("Por favor, introduce un array de números válido y un multiplicador válido.");
    } else {
        // Iteramos el array y mostramos cada valor multiplicado por el multiplicador por consola
        array.forEach(valor => console.log(valor * multiplicador));
    }
}