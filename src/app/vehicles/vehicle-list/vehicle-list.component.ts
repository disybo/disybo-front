import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../../shared/models/vehicle.model';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit, OnChanges {
  @Input() vehicleList: Vehicle[]
  filteredList: Vehicle[] = []
  checked: boolean = true

  constructor() { }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {
    // initialize list when we receive input
    this.filteredList = this.vehicleList
  }

  ngOnChanges(changes): void {
    //throw new Error("Method not implemented.");
    this.filteredList = this.vehicleList
    this.filterList()
  }
  // when checkbox is click either filter the list or reset it
  filterList() {
    this.checked = !this.checked

    if (!this.checked) {
      this.filteredList = this.vehicleList
      return
    } 

    this.filteredList = this.vehicleList.filter(x => x.urgency !== 'low')
  }
}
