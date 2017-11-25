import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles-registry-list',
  templateUrl: './vehicles-registry-list.component.html',
  styleUrls: ['./vehicles-registry-list.component.css']
})
export class VehiclesRegistryListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public vehicles: any = [
    {id: 0, name: "vehicle1", type: "type 1", year: 2016},
    {id: 1, name: "vehicle2", type: "type 2", year: 2010},
    {id: 2, name: "vehicle3", type: "type 1", year: 2012},
    {id: 3, name: "vehicle4", type: "type 3", year: 2009},
  ]

  goTo(vehicle: any): void {
   this.router.navigate(['/vehicles/'+ vehicle.id]);
  }

}
