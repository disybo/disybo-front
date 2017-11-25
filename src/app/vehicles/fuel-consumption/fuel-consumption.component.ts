import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-fuel-consumption',
  templateUrl: './fuel-consumption.component.html',
  styleUrls: ['./fuel-consumption.component.css']
})
export class FuelConsumptionComponent implements OnInit {
  public color = {
    red: 'rgb(255, 99, 132)',
    redop: 'rgba(255, 99, 132, 0.2)',
    orange: 'rgb(255, 159, 64)',
    orangeop: 'rgba(255, 159, 64,0.2)',
    yellow: 'rgb(255, 205, 86)',
    yellowop: 'rgba(255, 205, 86, 0.2)',
    green: 'rgb(75, 192, 192)',
    greenop: 'rgba(75, 192, 192,0.2)',
    blue: 'rgb(54, 162, 235)',
    blueop: 'rgba(54, 162, 235, 0.2)',
    purple: 'rgb(153, 102, 255)',
    purpleop: 'rgba(153, 102, 255,0.2)',
    grey: 'rgb(201, 203, 207)',
    greyop: 'rgba(201, 203, 207, 0.2)'
  }; 

  constructor() { }

  ngOnInit() {
  }

  

  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Wille 300'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Wille 400'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Wille 600'},
    {data: [1, 8, 7, 19, 10, 20, 30], label: 'Wille 800'},
    {data: [8, 4, 17, 29, 40, 57, 60], label: 'MAN TGL 8.150'},
    {data: [28, 48, 77, 9, 100, 27, 40], label: 'MAN TGS 26.320'},
    {data: [38, 48, 77, 9, 100, 27, 80], label: 'SCANIA P270'},
    {data: [48, 48, 77, 92, 60, 27, 42], label: 'SCANIA P320'},
    {data: [58, 48, 77, 39, 43, 27, 40], label: 'SCANIA P340'},
    {data: [68, 48, 77, 59, 26, 27, 70], label: 'SCANIA P360'},
    {data: [78, 48, 77, 96, 46, 27, 43], label: 'VOLVO FM 410'},
    {data: [88, 48, 77, 97, 34, 27, 50], label: 'VOLVO FM9'}
  ];
  public lineChartLabels:Array<any> = 
  ['2011', '2012', '2013', '2014', '2015', '2016', '2017'];
  public lineChartOptions:any = {
    elements:{line:{fill:false}},
    scaleShowVerticalLines: false,
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { 
      backgroundColor: this.color.redop,
      borderColor: this.color.red
    },
    { 
      backgroundColor: this.color.orangeop,
      borderColor: this.color.orange
    },
    { 
      backgroundColor: this.color.yellowop,
      borderColor: this.color.yellow
    },
    { 
      backgroundColor: this.color.greenop,
      borderColor: this.color.green
    },
    { 
      backgroundColor: this.color.blueop,
      borderColor: this.color.blue
    },
    { 
      backgroundColor: this.color.purpleop,
      borderColor: this.color.purple
    },
    { 
      backgroundColor: this.color.greyop,
      borderColor: this.color.grey
    },
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
