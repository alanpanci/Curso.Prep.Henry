// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un array
    // Tu código:
    return array[0];
}


function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    return array[array.length - 1]
}


function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    return array.length
}


function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] + 1;
    }
    return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array.push(elemento);
    return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    array.unshift(elemento);
    return array;
}


function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    var respuesta = palabras[0];
    for (var i = 1; i < palabras.length; i++) {
        respuesta = respuesta + " " + palabras[i];
    }
    return respuesta;
}


function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    for (var i = 0; i < array.length; i++) {
        if (array[i] == elemento) {
            return true;
        }
    }
    return false;
}


function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    var respuesta = 0
    for (var i = 0; i < numeros.length; i++) {
        respuesta = respuesta + numeros[i];
    }
    return respuesta;
}


function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    var respuesta = agregarNumeros(resultadosTest);
    var promedio = respuesta / resultadosTest.length;
    return promedio;
}


function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    var mayor = numeros[0];
    for (var i = 1; i < numeros.length; i++) {
        if (mayor < numeros[i]) {
            mayor = numeros[i]
        }
    }
    return mayor;
}


function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
       // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:

    if (arguments.length < 1) {
        return 0;
    }
    var total = 1;
    for (var i = 0; i < arguments.length; i++) {
        total = total * arguments[i];
    }
    return total;
}


function cuentoElementos(arreglo) {
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
    var respuesta = 0;
    var valorAComparar = 18;
    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > valorAComparar) {
            respuesta++;
        }
    }
    return respuesta
}



function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí 
    var finDeSemana = "Es fin de semana";
    var diaLaboral = "Es dia Laboral";
    if (numeroDeDia === 1 || numeroDeDia === 7) {
        return finDeSemana;
    } else {
        return diaLaboral;
    }

}


function empiezaConNueve(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
    var numAString = n.toString();
    if (numAString.charAt(0) == 9) {
        return true;
    };
    return false
}


function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí 
    for (var i = 0; i < arreglo.length - 1; i++) {
        if (arreglo[i] !== arreglo[i + 1]) {
            return false
        }
    }
    return true
}


function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
    var respuesta = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] == "Enero" || array[i] == "Marzo" || array[i] == "Noviembre") {
            respuesta.push(array[i])
        }
    }
    if (respuesta.length !== 3) {
        return "No se encontraron los meses pedidos";
    } else {
        return respuesta;
    }
}


function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
    var respuesta = []
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 100)
            respuesta.push(array[i]);
    }
    return respuesta
}




function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    var respuesta = [];
    for (var i = 0; i < 10; i++) {
        numero = numero + 2;
        if (i == numero) {
            return "Se interrumpió la ejecución"
        }
        respuesta.push(numero);
    }
    return respuesta;
}


function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
    var respuesta = [];
    var suma = numero
    for (var i = 0; i < 10; i++) {
        if (i === 5) {
            continue;
        } else {
            suma = suma + 2;
            respuesta.push(suma);
        }
    }
    return respuesta
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    devolverPrimerElemento,
    devolverUltimoElemento,
    obtenerLargoDelArray,
    incrementarPorUno,
    agregarItemAlFinalDelArray,
    agregarItemAlComienzoDelArray,
    dePalabrasAFrase,
    arrayContiene,
    agregarNumeros,
    promedioResultadosTest,
    numeroMasGrande,
    multiplicarArgumentos,
    cuentoElementos,
    diaDeLaSemana,
    empiezaConNueve,
    todosIguales,
    mesesDelAño,
    mayorACien,
    breakStatement,
    continueStatement
};