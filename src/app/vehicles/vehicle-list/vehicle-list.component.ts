import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../../shared/models/vehicle.model';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
@Input() vehicleList: Vehicle[]
  constructor() { }

  ngOnInit() {
  }
}
