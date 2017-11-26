import { Component, OnInit, OnChanges, Input, SimpleChanges, ViewChild } from '@angular/core';
import { VehicleConsumption } from '../shared/vehicleconsumption.model';

@Component({
  selector: 'app-vehicle-consumption',
  templateUrl: './vehicle-consumption.component.html',
  styleUrls: ['./vehicle-consumption.component.css']
})
export class VehicleConsumptionComponent implements OnInit, OnChanges {

  @Input() data: VehicleConsumption
  dataReady: boolean = false

  public lineChartType:string = 'line';
  
  public lineChartOptions:any = {
    legend: {
      display: false
    },
    responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Total consumption (Liter)'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }]
    }
  };

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.data.data.length > 0) {
      this.dataReady = true;
    }
  }
}
