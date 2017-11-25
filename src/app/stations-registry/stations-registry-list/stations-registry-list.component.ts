import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stations-registry-list',
  templateUrl: './stations-registry-list.component.html',
  styleUrls: ['./stations-registry-list.component.css']
})
export class StationsRegistryListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public stations: any = [
    {id: 0, name: "station1" },
    {id: 1, name: "station2" },
    {id: 2, name: "station3" },
    {id: 3, name: "station4" },
  ]

  goTo(station: any): void {
   this.router.navigate(['/station/'+ station.id]);
  }

}
