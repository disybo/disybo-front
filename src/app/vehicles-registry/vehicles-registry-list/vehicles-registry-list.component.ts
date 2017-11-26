import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material';

import { Vehicle } from '../shared/vehicle.model';

@Component({
  selector: 'app-vehicles-registry-list',
  templateUrl: './vehicles-registry-list.component.html',
  styleUrls: ['./vehicles-registry-list.component.css']
})
export class VehiclesRegistryListComponent implements OnInit, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.dataSource = new MatTableDataSource<Vehicle>(changes.vehicles.currentValue);
  }
  @Input() vehicles: Vehicle[]

  displayedColumns = ['vehicle_id', 'description', 'type', 'year'];
  dataSource = new MatTableDataSource<Vehicle>(this.vehicles);

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(vehicle: any): void {
   this.router.navigate(['/vehicle/'+ vehicle.id]);
  }

}
