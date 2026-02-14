function saludar (nombre: string): string {
    return `Hola, ${nombre}`
}

function promedio (notas: number[]): number {
    return ((notas.reduce((total, nota) => total + nota, 0))/notas.length)
}

let notas: number[] = [5, 6, 10, 9, 4, 8]
 
console.log(`SU promedio es: ${promedio(notas)}`)

