export class Consumption {
  
  constructor() {
    this.labels = [];
    this.data = []
  }
  
  labels: string[];
  data: StationConsumption[];
}

export class StationConsumption {

  constructor() {
    this.label = "";
    this.data = []
  }

  data: number[];
  label: string;
}
