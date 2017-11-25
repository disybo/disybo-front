import { Component, OnInit } from '@angular/core';

import { StationsService } from './shared/stations.service';
import { Station } from './shared/station.model';

@Component({
  selector: 'app-stations-registry',
  templateUrl: './stations-registry.component.html',
  styleUrls: ['./stations-registry.component.css']
})
export class StationsRegistryComponent implements OnInit {
  stations: Station[];

  constructor(private service: StationsService) { }

  ngOnInit() {
    this.service.stations.subscribe(update => this.stations = update);
    this.service.getStations();
  }

  searchFn(text: string) {
    console.log("SEARCH", text)
  }
}
