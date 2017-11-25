import { Component, OnInit } from '@angular/core';

import { StationsService } from './shared/stations.service'

import { Fuel } from './shared/fuel.model'
import { OverallData } from './shared/overall.model';
import { FuelTypeData } from './shared/fueltype.model';
import { Consumption } from './shared/consumption.model';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  fuelData: Fuel[];
  overallData: OverallData = new OverallData();
  fuelTypeData: FuelTypeData = new FuelTypeData();
  consumptionData: Consumption;
  startDate: Date = new Date(2016, 1, 1, 0, 0, 0, 0);
  endDate: Date = new Date(2017, 1, 1, 0, 0, 0, 0);

  constructor(private service: StationsService) { }

  ngOnInit() {
    this.service.overall.subscribe(update => this.overallData = update);
    this.service.fueltype.subscribe(update => this.fuelTypeData = update);
    this.service.consumption.subscribe(update => this.consumptionData = update);
    this.refresh({'startDate': this.startDate, 'endDate': this.endDate});
  }

  refresh(data: any){
    this.service.getOverallFuelData(data.startDate, data.endDate);
    this.service.getFuelTypeStatistics(this.startDate, this.endDate);
    this.service.getStationsConsumption(data.startDate, data.endDate)
  }
}
