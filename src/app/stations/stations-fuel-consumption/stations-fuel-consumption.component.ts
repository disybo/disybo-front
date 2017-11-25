import { Consumption } from './../shared/consumption.model';
import { Component, OnInit, OnChanges, Input, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'stations-fuel-consumption',
  templateUrl: './stations-fuel-consumption.component.html',
  styleUrls: ['./stations-fuel-consumption.component.css']
})
export class StationsFuelConsumptionComponent implements OnInit, OnChanges {
  @Input() data: Consumption;
  dataReady: boolean = false;
 
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.data.data.length > 0) {
      this.dataReady = true;
    }
  }

  public lineChartOptions:any = {
    responsive: true,
    elements:{line:{fill:false}},
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Total amount extracted (Liters)'
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

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
}
