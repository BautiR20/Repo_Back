type Estudiante = {
    nombre: string;
    edad: number;
    activo: boolean;
    email?: string;

}

const estudiante1 : Estudiante = {
    nombre: "Lourdes",
    edad: 21,
    activo: true,
    email: "luli@gmail.com"
}

const estudiante2 : Estudiante = {
    nombre: "Pedro",
    edad: 22,
    activo: true
}

interface Materia {
    nombre: string,
    codigo: string,
    cantEstudiantes: number,

}
const filosofia : Materia = {
    nombre: "filosofia",
    codigo: "54Y1P",
    cantEstudiantes: 91

}

console.log(estudiante1, estudiante2, filosofia)

function MostrarEstudiante (estudiante: Estudiante): void  {
    console.log(estudiante.nombre)
    console.log(estudiante.edad)
    console.log(estudiante.activo)
    if (estudiante.email){
        console.log(estudiante.email)
    } else {
        console.log("Sin Email")
    }

}
MostrarEstudiante (estudiante2)
MostrarEstudiante (estudiante1)
