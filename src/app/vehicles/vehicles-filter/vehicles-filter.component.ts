import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles-filter',
  templateUrl: './vehicles-filter.component.html',
  styleUrls: ['./vehicles-filter.component.css']
})
export class VehiclesFilterComponent implements OnInit {
  // default value for radio buttons day/month/year
  granularity = 0
  constructor() { }

  ngOnInit() {
  }
  firstDate(x) {
    console.log("first date got ", x)
  }
  endfunc(x) {
    console.log("end date got ", x)
  }
  refreshfunc(x, y) {
    console.log("refresh")
    console.log("x and y", x, y)
  }
}
