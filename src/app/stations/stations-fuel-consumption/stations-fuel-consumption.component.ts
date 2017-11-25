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

  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Station 1'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Station 2'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Station 3'},
    {data: [58, 88, 67, 33, 230, 57, 50], label: 'Station 4'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true,
    elements:{line:{fill:false}}
  };

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
}
