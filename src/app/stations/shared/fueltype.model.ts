import { Fuel } from './fuel.model'

export class FuelTypeData {
    
    labels: string[];
    data: Array<any>;

    constructor() {
        this.labels = [];
        this.data = new Array<any>();
    }
}