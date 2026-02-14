// Con interface -> implements
interface Vehiculo {
    conducir(): void
}

class Auto implements Vehiculo{
    conducir(): void {
        console.log("Conduce en carretera")
    }
}

class Lancha implements Vehiculo{
    conducir(): void {
        console.log("Conduce en agua")
    }
}

//Con clases -> extends
class Animal{
    Ruido(): void{
        console.log("Hace un ruido")
    }
}

class Gato extends Animal{
    Ruido(): void {
        console.log("Miau")
    }
}

class Perro extends Animal{
    Ruido(): void {
        console.log("Guau Guau")
    }
}