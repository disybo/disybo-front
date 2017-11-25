import { Component, OnInit, Input } from '@angular/core';
import { Fuel } from '../shared/fuel.model'
import { OverallData } from '../shared/overall.model';


@Component({
  selector: 'stations-overall-comparison',
  templateUrl: './stations-overall-comparison.component.html',
  styleUrls: ['./stations-overall-comparison.component.css']
})
export class StationsOverallComparisonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.pieChartData = this.overallData.data;
    this.pieChartLabels = this.overallData.labels;
  }
  @Input() overallData: OverallData

   // Pie
   public pieChartData:number[];
   public pieChartLabels:string[];
   public pieChartType:string = 'pie';
  
   // events
   public chartClicked(e:any):void {
     console.log(e);
     console.log(this.overallData)
   }
  
   public chartHovered(e:any):void {
     console.log(e);
   }
}
