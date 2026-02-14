class Planeta {
    public nombre: string; 
    private _masaKG: number; 
    protected radioKm: number;

    constructor (nombre: string, _masaKG: number, radioKm: number){
        this.nombre= nombre;
        this._masaKG = _masaKG;
        this.radioKm = radioKm
    }

    public get MasaKg(): number {
        console.log(`La masa del planeta ${this.nombre} es: `)
        return this._masaKG
    }
    public set MasaKg(nuevamasa: number){
        
        if(nuevamasa <= 0){
            throw new Error ("La masa debe ser positiva y distinta de 0")
        }
        else{
            this._masaKG = nuevamasa
        }
    }
    private MetodoInterno(): number {
        return this._masaKG
    }
}


let saturno = new Planeta ("saturno", 300000, 20000)
console.log(saturno.MasaKg)