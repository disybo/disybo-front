import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { Fuel } from '../shared/fuel.model'
import { OverallData } from '../shared/overall.model';
//import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'stations-overall-comparison',
  templateUrl: './stations-overall-comparison.component.html',
  styleUrls: ['./stations-overall-comparison.component.css']
})
export class StationsOverallComparisonComponent implements OnInit, OnChanges {
  
  @Input() overallData: OverallData
  dataReady: boolean = false;

  constructor() { }
  
  ngOnInit() {
  }

  ngOnChanges(changes): void {
    if(this.overallData.data.length > 0) {
      this.dataReady = true;
    }
  }

   // Chart parameters
  public pieChartType:string = 'pie';
  public chartOptions:any = {
    responsive: true
  };
}
