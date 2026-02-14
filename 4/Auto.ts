import { Motor } from "./interfaces";
import { MotorDeCombustion } from "./MotorDeCombustion";
import { Ruedas, TipoRuedas, Chasis } from "./partes";
export class Auto {
    private motor: Motor;
    private chasis: Chasis;
    private precio: number;
    private ruedas: Ruedas;
    private fechaAlt: Date = new Date();
    private fechaVenta: Date | null = null;
    private patente: string;
    

    constructor (motor: Motor, chasis: Chasis, ruedas: Ruedas, precio: number, patente: string){
        this.motor = motor;
        this.chasis = chasis;
        this.precio = precio;
        this.ruedas = ruedas;
        this.patente = patente;
    }

    public encender(): void{
        this.motor.encender()
    }

    public apagar(): void {
        this.motor.apagar()
       
    }
    public conducir(): void{
        if (this.motor.estaEncendido){
            console.log("El auto esta en movimiento")
        }else{
            console.log("Debes encender el motor primero")
        }
    }
    public get getFechaAlt(): Date{
        return this.fechaAlt
    }
    public set setFechaVenta(fechaVenta: Date){
        this.fechaVenta = fechaVenta
    }
    public get getPatente(): string{
        return this.patente
    }

}

let fiat1 = new Auto( new MotorDeCombustion(), new Chasis("rojo"), new Ruedas(15, TipoRuedas.CALLE), 45000000, "FOU292")

console.log(fiat1)

