import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stations-registry-search',
  templateUrl: './stations-registry-search.component.html',
  styleUrls: ['./stations-registry-search.component.css']
})
export class StationsRegistrySearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  search(){
    console.log("SEARCH")
  }
}
