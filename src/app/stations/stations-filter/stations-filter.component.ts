import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'stations-filter',
  templateUrl: './stations-filter.component.html',
  styleUrls: ['./stations-filter.component.css']
})
export class StationsFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  granularity: string;

  granularity_choices = [
    'Daily',
    'Monthly',
    'Yearly'
  ];
}
