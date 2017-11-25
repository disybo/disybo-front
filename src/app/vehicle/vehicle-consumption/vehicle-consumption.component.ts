import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-consumption',
  templateUrl: './vehicle-consumption.component.html',
  styleUrls: ['./vehicle-consumption.component.css']
})
export class VehicleConsumptionComponent implements OnInit {
   // lineChart
   public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';
  public lineChartOptions:any = {
    legend: {
      display: false
    },
    responsive: true
  };

  constructor() { }

  ngOnInit() {
  }

  

}
