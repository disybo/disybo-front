import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stations-fuel-pumped',
  templateUrl: './stations-fuel-pumped.component.html',
  styleUrls: ['./stations-fuel-pumped.component.css']
})
export class StationsFuelPumpedComponent implements OnInit {
  constructor() { }
  
  ngOnInit() {
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  // TODO get proper years
  public barChartLabels:string[] = ['Fuel Station 1', 'Fuel Station 2', 'Fuel Station 3', 
                                    'Fuel Station 4', 'Fuel Station 5', 'Fuel Station 6', 'Fuel Station 7', 'Fuel Station 8'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    // TODO Make API calls to fetch data from server
    {data: [65, 59, 80, 81, 56, 55, 40, 30], label: 'Incoming fuel'},
    {data: [28, 48, 40, 19, 86, 27, 90, 20], label: 'Outgoing fuel'}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
    * (My guess), for Angular to recognize the change in the dataset
    * it has to change the dataset variable directly,
    * so one way around it, is to clone the data, change it and then
    * assign it;
    */
  }
}
