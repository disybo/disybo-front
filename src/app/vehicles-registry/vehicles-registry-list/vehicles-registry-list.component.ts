import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Vehicle } from '../shared/vehicle.model';

@Component({
  selector: 'app-vehicles-registry-list',
  templateUrl: './vehicles-registry-list.component.html',
  styleUrls: ['./vehicles-registry-list.component.css']
})
export class VehiclesRegistryListComponent implements OnInit {

  @Input() vehicles: Vehicle[]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(vehicle: any): void {
   this.router.navigate(['/vehicle/'+ vehicle.id]);
  }

}
