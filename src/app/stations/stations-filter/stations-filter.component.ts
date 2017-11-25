import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'stations-filter',
  templateUrl: './stations-filter.component.html',
  styleUrls: ['./stations-filter.component.css']
})
export class StationsFilterComponent implements OnInit {

  granularity: string;
  @Input() endDateValue: Date;
  @Input() startDateValue: Date;
  @Output() onRefresh = new EventEmitter();

  constructor() { 
  }

  ngOnInit() {
    this.granularity = "yearly"
  }

  refresh() { 
    this.onRefresh.emit({'startDate': this.startDateValue, 'endDate': this.endDateValue, 'granularity': this.granularity })
  }
}
