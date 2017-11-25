export class Fuel {

  constructor(name: string, volume: number) {
      this.display_name = name;
      this.fuel_volume = volume;
  }

  station_id: string;
  display_name: string;
  fuel_volume: number;
}
