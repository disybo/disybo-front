import { Component, OnInit } from '@angular/core';

import { Vehicle } from '../shared/models/vehicle.model'

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  vehicle1: Vehicle = {id:'id', name: 'vehicle1', km: 123, type:'big', warningLevel:'ok'}
  vehicle2: Vehicle = {id:'id', name: 'vehicle2', km: 123, type:'big', warningLevel:'warning'}
  vehicle3: Vehicle = {id:'id', name: 'vehicle3', km: 123, type:'small', warningLevel:'warning'}
  vehicle4: Vehicle = {id:'id', name: 'vehicle4', km: 123, type:'medium', warningLevel:'warning'}
  vehicle5: Vehicle = {id:'id', name: 'vehicle5', km: 123, type:'big', warningLevel:'warning'}
  vehicle6: Vehicle = {id:'id', name: 'vehicle6', km: 123, type:'medium', warningLevel:'danger'}
  vehicle7: Vehicle = {id:'id', name: 'vehicle7', km: 123, type:'medium', warningLevel:'warning'}
  vehicle8: Vehicle = {id:'id', name: 'vehicle8', km: 123, type:'big', warningLevel:'warning'}

  vehicleList: Vehicle[] =[this.vehicle1, this.vehicle2, this.vehicle3, this.vehicle4,
    this.vehicle5, this.vehicle6, this.vehicle7, this.vehicle8]
}
