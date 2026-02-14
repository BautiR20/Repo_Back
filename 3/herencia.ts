class CuerposCelestes {
    private nombre: string;

    constructor(nombre: string){
        this.nombre = nombre
    }
    get getNombre(): string {
        return this.nombre
    }
}

class Planeta extends CuerposCelestes {
    private masa: number;
    constructor(nombre: string, masa: number) {
        super(nombre)
        this.masa = masa
    }
    get getMasa(): number {
        return this.masa
    }
}

let tierra = new Planeta ("tierra", 600000)
console.log(tierra.getNombre, tierra.getMasa)

