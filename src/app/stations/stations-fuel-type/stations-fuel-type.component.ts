import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {FuelTypeData} from '../shared/fueltype.model'
import {Fuel} from '../shared/fuel.model'

@Component({
  selector: 'stations-fuel-type',
  templateUrl: './stations-fuel-type.component.html',
  styleUrls: ['./stations-fuel-type.component.css']
})
export class StationsFuelTypeComponent implements OnInit, OnChanges {
  
  @Input() fuelTypeData: FuelTypeData;

  constructor() { }
  
  ngOnInit() {
     
  }

  // Variable to keep track if the data has arrived
  public dataReady:boolean = false;

  ngOnChanges(changes): void {
    if(this.fuelTypeData.data.length > 0) {
      this.changeChartData();
      this.dataReady = true;
    }
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{
          stacked: true
      }],
      yAxes: [{
          stacked: true
      }]
  }
  };

  changeChartData() {
    this.barChartLabels = this.fuelTypeData.labels;

    this.fuelTypeData.data.forEach(station =>
        station.forEach(element => {
          console.log("WHHDHSA", element)
          switch(element.display_name) {
              case this.dieselLabel: {
                this.dieselData.push(element.fuel_volume)
              }
              case this.poltLabel: {
                this.poltData.push(element.fuel_volume)
              }
              case this.ADBlueLabel: {
                this.ADBlueData.push(element.fuel_volume)  
              }
              case this.gasLabel: {
                this.gasData.push(element.fuel_volume)  
              }
          }
        })
    )
  }

  public dieselData = []
  public dieselLabel = "Diesel"
  public poltData = []
  public poltLabel = "polttoöljy"
  public ADBlueData = []
  public ADBlueLabel = "ADblue"
  public gasData = []
  public gasLabel = "bensa"


  public barChartLabels:string[] = []
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    // TODO Make API calls to fetch data from server
    {data: this.dieselData, label: "Diesel"},
    {data: this.poltData, label: "Fuel Oil"},
    {data: this.ADBlueData, label: "AD Blue"},
    {data: this.gasData, label: "Gas"}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(this.fuelTypeData);
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
