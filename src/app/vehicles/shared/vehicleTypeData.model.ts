import {Fuel} from '../../stations/shared/fuel.model'

export class VehicleTypeData {
    
    name: string;
    data: Array<Fuel>;
    
    constructor() {
        this.name = "";
        this.data = new Array<Fuel>();
    }
}