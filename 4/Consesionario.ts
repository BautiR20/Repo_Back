import { Auto } from "./Auto";
import { Motor } from "./interfaces";
import { Chasis, Ruedas } from "./partes";

export class Consesionario{
    private autosDisponibles: Auto[] = [];
    private autosVendidos: Auto[] = [];
    public fabricarAuto(motor: Motor, chasis: Chasis, ruedas: Ruedas, precio: number, patente: string): Auto{
        const NuevoAuto = new Auto (motor, chasis, ruedas, precio, patente)
        this.autosDisponibles.push(NuevoAuto)
        console.log("Auto creado y agregado al inventario", NuevoAuto)
        return NuevoAuto
    }

    public obtenerCantidadAutos(): number{
        return this.autosDisponibles.length
    }

    public venderAuto(patente: string){
        let autoEncontrado = this.autosDisponibles.findIndex(auto => auto.getPatente === patente)
        if (autoEncontrado > -1){
            const autoVendido = this.autosDisponibles.splice(autoEncontrado, 1)[0]
            autoVendido.setFechaVenta = new Date()
            console.log(`Se vendio el auto patente ${patente}`)
            this.autosVendidos.push(autoVendido)
            return autoVendido
        }else{
            console.log(`No se encontro la patente ${patente}`)
            return null
        }
    }

    public get getAutosDisponibles(): Auto[]{
        return this.autosDisponibles
    }

    public get getAutosVendidos(): Auto[]{
        return this.autosVendidos
    }
}