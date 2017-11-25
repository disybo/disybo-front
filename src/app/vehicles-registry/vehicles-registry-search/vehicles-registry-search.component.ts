import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles-registry-search',
  templateUrl: './vehicles-registry-search.component.html',
  styleUrls: ['./vehicles-registry-search.component.css']
})
export class VehiclesRegistrySearchComponent implements OnInit {
  types = [
    {value: '0', viewValue: 'Type 1'},
    {value: '1', viewValue: 'Type 2'},
    {value: '2', viewValue: 'Type 3'}
  ];

  years = [
    {value: '2017', viewValue: '2017'},
    {value: '2016', viewValue: '2016'},
    {value: '2015', viewValue: '2015'},
    {value: '2014', viewValue: '2014'},
    {value: '2013', viewValue: '2013'},
    {value: '2012', viewValue: '2012'},
    {value: '2011', viewValue: '2011'},
    {value: '2010', viewValue: '2010'},
    {value: '2009', viewValue: '2009'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
