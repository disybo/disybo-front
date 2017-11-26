import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { VehicleType } from '../shared/vehicletype.model'
import { VehicleTypeData } from '../shared/vehicleTypeData.model';

@Component({
  selector: 'app-fuel-consumption',
  templateUrl: './fuel-consumption.component.html',
  styleUrls: ['./fuel-consumption.component.css']
})
export class FuelConsumptionComponent implements OnInit, OnChanges  {
  
  @Input() vehicleTypes: VehicleType[];
  @Input() vehicleTypeData: VehicleTypeData;
  @Output() onAddCarType = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  month: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
     "November",
     "December",
    ];

  dataReady:boolean = false;
  carTypeID: string; 

  ngOnChanges(changes): void {
    if (this.vehicleTypeData.data.length > 0) {
      this.updateVehicleType();
      this.dataReady = true;
    } 
  }

  updateVehicleType() {
    let tempData = []
    this.vehicleTypeData.data.forEach(element => {
      this.lineChartLabels.push(this.month[new Date(element.display_name).getMonth()] + " " + element.display_name.substring(2, 4));
      tempData.push(element.fuel_volume)
    })  
    this.lineChartData.push({'data': tempData, 'label': this.vehicleTypeData.name})
  }

  // lineChart
  public lineChartData:Array<any> = [];
  
  public lineChartLabels:Array<any> = [];
  public lineChartlabel: string;

  public addCarTypeToChart() {
    this.dataReady = false;
    this.vehicleTypeData = new VehicleTypeData();
    this.lineChartData = [];
    this.lineChartLabels = [];
    this.lineChartlabel = "";
    this.onAddCarType.emit({'id': this.carTypeID});
  }

  

  public lineChartOptions:any = {
    elements:{line:{fill:false}},
    scaleShowVerticalLines: false,
    responsive: true
  };
  
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
  }; 

  public lineChartColors:Array<any> = [
    { 
      backgroundColor: this.color.redop,
      borderColor: this.color.red
    }
  ];

}
