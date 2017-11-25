import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles-pollution',
  templateUrl: './vehicles-pollution.component.html',
  styleUrls: ['./vehicles-pollution.component.css']
})
export class VehiclesPollutionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  }
  };
  public barChartLabels:string[] = [
    'Wille 300',
    'Wille 400',
    'Wille 600',
    'Wille 800',
    'MAN TGL 8.150',
    'MAN TGS 26.320',
    'SCANIA P270',
    'SCANIA P320',
    'SCANIA P340',
    'SCANIA P360',
    'VOLVO FM 410',
    'VOLVO FM9',
  ];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [80, 81, 56, 55, 50, 65, 59, 80, 81, 56, 55, 50], label: 'CO2'}
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
  }

}
