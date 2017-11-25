import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'stations-filter',
  templateUrl: './stations-filter.component.html',
  styleUrls: ['./stations-filter.component.css']
})
export class StationsFilterComponent implements OnInit {

  granularity: string;
  @Input() endDateValue: Date;
  @Input() startDateValue: Date;

  constructor() { 
  }

  ngOnInit() {
    this.granularity = "yearly"
  }

  refresh() { 
    
    console.log(this.dateHelper(this.startDateValue.toDateString()))
  }

  dateHelper(key: string) {
    const dateObj = new Date(+key * 1000);
    // Need to return Date object/ISOString format date as accepted by Material DatePicker component
    return new Date(dateObj.getFullYear(), dateObj.getUTCMonth(), dateObj.getUTCDate());
  }
}
