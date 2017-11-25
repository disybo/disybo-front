import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Station } from '../shared/station.model';

@Component({
  selector: 'app-stations-registry-list',
  templateUrl: './stations-registry-list.component.html',
  styleUrls: ['./stations-registry-list.component.css']
})
export class StationsRegistryListComponent implements OnInit {
  @Input() stations: Station[]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(station: any): void {
   this.router.navigate(['/station/'+ station.id]);
  }

}
