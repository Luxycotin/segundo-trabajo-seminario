
function ingresarDatos() {
    let personas = [];
    let continuar = true;


    const cantidad = parseInt(prompt("¿Cuántas personas deseas registrar? Escriba un número entre 1 y 10."));


    for (let i = 0; i < cantidad; i++) {
        let nombre = prompt("Ingresa el nombre de la persona #" + (i + 1));
        let edad = parseInt(prompt("Ingresa la edad de " + nombre));
        let nota = parseFloat(prompt("Ingresa la nota de " + nombre));

        
        personas.push([nombre, edad, nota]);
    }


    console.log("Lista original de personas:");
    console.table(personas);


    personas.sort((a, b) => b[2] - a[2]);

 
    console.log("Lista ordenada por nota (de mayor a menor):");
    console.table(personas);
}


ingresarDatos();
