import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stations-registry-search',
  templateUrl: './stations-registry-search.component.html',
  styleUrls: ['./stations-registry-search.component.css'],
})
export class StationsRegistrySearchComponent implements OnInit {
  searchText: string = '';
  constructor() {}

  ngOnInit() {}

  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.searchText);
  }
}
