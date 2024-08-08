// Código para manejar el menú de navegación
document.addEventListener("DOMContentLoaded", () => {
    // Obtener los elementos necesarios del DOM
    const btnNav = document.querySelector(".btn-nav");
    const nav = document.querySelector("nav");

    // Agregar evento de click al botón del menú
    btnNav.addEventListener("click", () => {
        // Si el menú está cerrado, abrirlo
        if (!nav.classList.contains("fx")) {
            nav.classList.add("fx", "slideDown");
            nav.classList.remove("slideUp");
            setTimeout(() => {
                nav.classList.remove("slideDown");
            }, 490);
            console.log("Menú abierto");
        // Si el menú está abierto, cerrarlo
        } else {
            nav.classList.remove("slideDown");
            nav.classList.add("slideUp");
            setTimeout(() => {
                nav.classList.remove("fx");
                nav.classList.remove("slideUp");
            }, 490);
            console.log("Menú cerrado");
        }
    });

    // Agregar eventos para las funciones de ejercicios
    document.getElementById('btn1').addEventListener('click', () => {
        const numero = parseInt(document.getElementById('numero1').value, 10);
        verificarParidad(numero);
    });

    document.getElementById('btn2').addEventListener('click', () => {
        const numero1 = parseInt(document.getElementById('numero2_1').value, 10);
        const numero2 = parseInt(document.getElementById('numero2_2').value, 10);
        compararNumeros(numero1, numero2);
    });

    document.getElementById('btn3').addEventListener('click', () => {
        const numero = parseInt(document.getElementById('numero3').value, 10);
        esMultiploDeCinco(numero);
    });

    document.getElementById('btn4').addEventListener('click', () => {
        const numero = parseInt(document.getElementById('numero4').value, 10);
        imprimirHasta(numero);
    });

    document.getElementById('btn5').addEventListener('click', () => {
        const palabra = document.getElementById('palabra').value;
        const cantidad = parseInt(document.getElementById('cantidad').value, 10);
        imprimirPalabra(palabra, cantidad);
    });

    document.getElementById('btn6').addEventListener('click', () => {
        const array = document.getElementById('array6').value.split(',').map(item => item.trim());
        imprimirArray(array);
    });

    document.getElementById('btn7').addEventListener('click', () => {
        const array = document.getElementById('array7').value.split(',').map(item => item.trim());
        imprimirArraySinQuinto(array);
    });

    document.getElementById('btn8').addEventListener('click', () => {
        const array = document.getElementById('array8').value.split(',').map(item => parseFloat(item.trim()));
        const multiplicador = parseFloat(document.getElementById('multiplicador').value);
        multiplicarArray(array, multiplicador);
    });
});

// Funciones para realizar las operaciones de los ejercicios
function verificarParidad(numero) {
    if (isNaN(numero)) {
        console.log("Por favor, introduce un número válido.");
    } else if (numero % 2 === 0) {
        console.log(`${numero} es par`);
    } else {
        console.log(`${numero} es impar`);
    }
}

function compararNumeros(numero1, numero2) {
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

function esMultiploDeCinco(numero) {
    if (isNaN(numero)) {
        console.log("Por favor, introduce un número válido.");
    } else if (numero % 5 === 0) {
        console.log(`${numero} es múltiplo de 5`);
    } else {
        console.log(`${numero} no es múltiplo de 5`);
    }
}

function imprimirHasta(numero) {
    if (isNaN(numero)) {
        console.log("Por favor, introduce un número válido.");
    } else {
        for (let i = 0; i <= numero; i++) {
            console.log(i);
        }
    }
}

function imprimirPalabra(palabra, cantidad) {
    if (isNaN(cantidad) || palabra.trim() === "") {
        console.log("Por favor, introduce una palabra válida y una cantidad válida.");
    } else {
        for (let i = 0; i < cantidad; i++) {
            console.log(palabra);
        }
    }
}

function imprimirArray(array) {
    if (array.length === 0 || array[0] === "") {
        console.log("Por favor, introduce un array válido.");
    } else {
        array.forEach(valor => console.log(valor));
    }
}

function imprimirArraySinQuinto(array) {
    if (array.length !== 10 || array[0] === "") {
        console.log("Por favor, introduce un array de 10 números válidos.");
    } else {
        array.forEach((valor, indice) => {
            if (indice !== 4) {
                console.log(valor);
            }
        });
    }
}

function multiplicarArray(array, multiplicador) {
    if (array.some(isNaN) || isNaN(multiplicador)) {
        console.log("Por favor, introduce un array de números válido y un multiplicador válido.");
    } else {
        array.forEach(valor => console.log(valor * multiplicador));
    }
}

