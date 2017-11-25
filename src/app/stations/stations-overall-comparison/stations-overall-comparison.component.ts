import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stations-overall-comparison',
  templateUrl: './stations-overall-comparison.component.html',
  styleUrls: ['./stations-overall-comparison.component.css']
})
export class StationsOverallComparisonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   // Pie
   public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
   public pieChartData:number[] = [300, 500, 100];
   public pieChartType:string = 'pie';
  
   // events
   public chartClicked(e:any):void {
     console.log(e);
   }
  
   public chartHovered(e:any):void {
     console.log(e);
 

}
