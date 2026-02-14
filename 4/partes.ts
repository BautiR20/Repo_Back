class Chasis {
    public color: string;

    constructor(color: string) {
        this.color = color;
    }

    public set cambiarColor(color: string){
        console.log(`Color ${this.color} cambiado a ${color}`)
        this.color = color;
        
    }

    public get MostrarColor(){
        return this.color
    }
}

enum TipoRuedas{
    DEPORTIVA = "Deportiva",
    TODO_TERRENO = "Todo Terreno",
    CALLE = "Calle"
}

class Ruedas {
    private rodado: number;
    private tipo: TipoRuedas;
    constructor (rodado: number, tipo: TipoRuedas){
        this.rodado = rodado;
        this.tipo = tipo;
    }

    public get getRodado(): number{
        return this.rodado
    }

    public get getTipo(): TipoRuedas{
        return this.tipo
    }
}


export { Chasis, TipoRuedas, Ruedas}