function calcularResultado(num1, num2, num3) {
    if (num1 > 0) {
      let producto = num2 * num3;
      console.log("El producto de los números es: " + producto);
    } else {
      let suma = num2 + num3;
      console.log("La suma de los números es: " + suma);
    }
  }
  
  // Ejemplo de uso
  calcularResultado(2, 4, 6); // El producto de los números es: 24
  calcularResultado(-3, 5, 7); // La suma de los números es: 12

// 2nd

  function verificarSuma(num1, num2, num3) {
    if (num1 === num2 + num3 || num2 === num1 + num3 || num3 === num1 + num2) {
      console.log("¡Hay un número que coincide con la suma de los otros dos!");
    } else {
      console.log("Ningún número coincide con la suma de los otros dos.");
    }
  }
  
  // Ejemplo de uso
  verificarSuma(2, 4, 6); // Ningún número coincide con la suma de los otros dos.
  verificarSuma(5, 2, 3); // ¡Hay un número que coincide con la suma de los otros dos!
  

// 3rd

let suma_3 = 0;

console.log("Números múltiplos de 3:");

for (let i = 3; i <= 99; i += 3) {
  console.log(i);
  suma_3 += i;
}

console.log("La suma_3 de los números múltiplos de 3 es: " + suma_3);

// 4th

console.log("Potencias de 2 menores o iguales que 100:");

for (let i = 0; Math.pow(2, i) <= 100; i++) {
  let potencia = Math.pow(2, i);
  console.log(potencia);
}

// 5th
let suma_5 = 0;

for (let i = 50; i <= 200; i++) {
  if (i % 2 === 0) {
    suma_5 += i;
  }
}

console.log("La suma de los números pares es: " + suma_5);

//6th

let celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));

let fahrenheit = (celsius * 9/5) + 32;

console.log("La temperatura en grados Fahrenheit es: " + fahrenheit);


//7th

let hora24 = parseInt(prompt("Ingresa la hora en formato de 24 horas (0-23):"));

let hora12;

if (hora24 >= 0 && hora24 <= 23) {
  if (hora24 === 0) {
    hora12 = 12 + " a.m.";
  } else if (hora24 === 12) {
    hora12 = 12 + " p.m.";
  } else if (hora24 < 12) {
    hora12 = hora24 + " a.m.";
  } else {
    hora12 = (hora24 - 12) + " p.m.";
  }

  console.log("La hora en formato de 12 horas es: " + hora12);
} else {
  console.log("Hora inválida. Debe estar entre 0 y 23.");
}

//8th
let vectorOriginal = [];
let vectorInverso = [];

// Leer los elementos del vector por teclado
for (let i = 0; i < 5; i++) {
  let elemento = prompt("Ingresa el elemento " + (i + 1) + ":");
  vectorOriginal.push(elemento);
}

// Copiar los elementos del vector original al vector inverso en orden inverso
for (let i = vectorOriginal.length - 1; i >= 0; i--) {
  vectorInverso.push(vectorOriginal[i]);
}

// Mostrar el vector inverso en la pantalla
console.log("Vector inverso:");
console.log(vectorInverso);

// 9th
let notas = [];
let suma = 0;
let notaMaxima = 0;
let notaMinima = 10;

// Leer las notas por teclado y calcular la suma, nota máxima y nota mínima
for (let i = 0; i < 5; i++) {
  let nota = parseFloat(prompt("Ingresa la nota " + (i + 1) + ":"));
  
  notas.push(nota);
  suma += nota;
  
  if (nota > notaMaxima) {
    notaMaxima = nota;
  }
  
  if (nota < notaMinima) {
    notaMinima = nota;
  }
}

let promedio = suma / notas.length;

// Mostrar todas las notas
console.log("Notas:");
console.log(notas);

// Mostrar la nota promedio
console.log("Nota promedio: " + promedio);

// Mostrar la nota más alta
console.log("Nota más alta: " + notaMaxima);

// Mostrar la nota más baja
console.log("Nota más baja: " + notaMinima);

// 10th
// Definir la matriz bidimensional 3x4
let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ];
  
  // Sumar los elementos de cada fila y mostrar los resultados en pantalla
  console.log("Suma de elementos por fila:");
  
  for (let i = 0; i < matriz.length; i++) {
    let sumaFila = 0;
    
    for (let j = 0; j < matriz[i].length; j++) {
      sumaFila += matriz[i][j];
    }
    
    console.log("Fila " + (i + 1) + ": " + sumaFila);
  }
  
  // Sumar los elementos de cada columna y mostrar los resultados en pantalla
  console.log("Suma de elementos por columna:");
  
  for (let j = 0; j < matriz[0].length; j++) {
    let sumaColumna = 0;
    
    for (let i = 0; i < matriz.length; i++) {
      sumaColumna += matriz[i][j];
    }
    
    console.log("Columna " + (j + 1) + ": " + sumaColumna);
  }
  