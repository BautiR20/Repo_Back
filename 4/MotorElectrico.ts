import { Motor } from "./interfaces";

export class MotorElectrico implements Motor{
    public estaEncendido: boolean = false;
    public bateria: number = 100;
    encender(): void {
        if(this.estaEncendido === true){
            console.log("Ya esta encedido el motor")
        }else{
        this.estaEncendido = true;
        console.log("Esta enendido el motor")
        }
    }

    apagar(): void {
        if (this.estaEncendido  === false){
            console.log("Ya esta apagado el motor")
        }else{
            this.estaEncendido = false;
            console.log("Esta apagado el motor")

        }
    }
}