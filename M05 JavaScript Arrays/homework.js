/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length -1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masUno = array.map( (num) => { return num + 1 } );
   return masUno;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array[array.length] = elemento; // Agregamos el elemento al final del arreglo
   return array;

}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ');
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   return arrayOfNums.reduce((total, num) => total + num, 0);
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let suma = 0;
   for (let i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
  }
  return suma / resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   return Math.max(...arrayOfNums);

}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) {
      return 0;
    } else if (arguments.length === 1) {
      return arguments[0];
    } else {
      let producto = 1;
      for (let i = 0; i < arguments.length; i++) {
        producto *= arguments[i];
      }
      return producto;
    }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
  let contador = 0; // Inicializamos un contador a cero
  for (let i = 0; i < array.length; i++) { // Recorremos el arreglo con un bucle for
    if (array[i] > 18) { // Si el elemento actual es mayor que 18
      contador++; // Incrementamos el contador en 1
    }
  }
  return contador; // Devolvemos el contador al final de la función
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana"; // Si es domingo o sábado, retorna "Es fin de semana"
    } else {
      return "Es dia laboral"; // Si no es domingo ni sábado, retorna "Es día laboral"
    }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   // Convertimos el número a string para poder acceder al primer dígito
  const numStr = num.toString();
    // Comparamos el primer dígito con '9'
  if (numStr.charAt(0) === '9') {
    return true; // Si el primer dígito es '9', retorna true
  } else {
    return false; // Si el primer dígito no es '9', retorna false
  }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for (let i = 1; i < array.length; i++) {
      if (array[i] !== array[0]) {
        return false; // Si encontramos un elemento distinto al primero, retornamos false
      }
    }
    return true;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   const mesesEncontrados = [];
   // Recorremos el arreglo buscando los meses "Enero", "Marzo" y "Noviembre"
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      mesesEncontrados.push(array[i]); // Si encontramos un mes buscado, lo agregamos al arreglo
    }
  }
  // Verificamos si se encontraron los tres meses pedidos
  if (mesesEncontrados.length === 3) {
    return mesesEncontrados; // Si se encontraron los tres meses, retornamos el arreglo con los meses encontrados
  } else {
    return "No se encontraron los meses pedidos"; // Si no se encontraron los tres meses, retornamos un mensaje de error
  }
 
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   const tabla = []; // Creamos un arreglo vacío para guardar los resultados
   // Utilizamos un bucle for para calcular los resultados de la tabla de multiplicar del 6
   for (let i = 0; i <= 10; i++) {
     const resultado = 6 * i; // Calculamos el resultado
     tabla.push(resultado); // Agregamos el resultado al arreglo
   }
   return tabla; // Retornamos el arreglo con los resultados
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   const mayoresACien = []; // Creamos un arreglo vacío para guardar los valores mayores a 100
   // Utilizamos un bucle for para recorrer el arreglo
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) { // Si el valor es mayor a 100
      mayoresACien.push(array[i]); // Lo agregamos al arreglo
    }
  }
  return mayoresACien; // Retornamos el arreglo con los valores mayores a 100
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   const nuevoArreglo = []; // Creamos un arreglo vacío para guardar los nuevos valores
   const arreglo = []; // Creamos un arreglo vacío para guardar los nuevos valores
  
  for (let i = 0; i < 10; i++) { // Iteramos 10 veces
    num += 2; // Aumentamos en 2 el número en cada iteración
    arreglo.push(num); // Agregamos el nuevo valor al arreglo
    
    if (num === i) { // Si la suma y la cantidad de iteraciones coinciden
      return "Se interrumpió la ejecución"; // Retornamos el string
      break; // Utilizamos el statement break para interrumpir la ejecución del bucle
    }
  }
  
  return arreglo; // Retornamos el arreglo con los nuevos valores
}


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   const arreglo = []; // Creamos un arreglo vacío para guardar los nuevos valores
   for (let i = 0; i < 10; i++) { // Iteramos 10 veces
    if (i === 5) { // Si el número de iteraciones es 5
      continue; // Utilizamos el statement continue para continuar con la siguiente iteración sin sumar el número
    }
    
    num += 2; // Aumentamos en 2 el número en cada iteración (excepto en la iteración número 5)
    arreglo.push(num); // Agregamos el nuevo valor al arreglo
  }
  return arreglo; // Retornamos el arreglo con los nuevos valores
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
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
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
