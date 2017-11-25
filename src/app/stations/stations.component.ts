import { Component, OnInit } from '@angular/core';
import { StationsService } from './shared/stations.service'
import { Fuel } from './shared/fuel.model'

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  fuelData: Fuel[];
  startDate: Date = new Date(2016, 1, 1, 0, 0, 0, 0);
  endDate: Date = new Date(2017, 1, 1, 0, 0, 0, 0);

  constructor(private service: StationsService) { }

  ngOnInit() {
    this.service.fuel.subscribe(update => this.fuelData = update);
    this.service.getOverallFuelData(this.startDate, this.endDate);
  }

}
