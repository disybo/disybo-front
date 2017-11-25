import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'stations-filter',
  templateUrl: './stations-filter.component.html',
  styleUrls: ['./stations-filter.component.css']
})
export class StationsFilterComponent implements OnInit {

  granularity: string;
  endDateValue: Date;
  startDateValue: Date;

  constructor() { 
   this.ngOnInit()
  }

  ngOnInit() {
    this.granularity = "yearly"
    this.startDateValue = new Date(2016, 1, 1, 0, 0, 0, 0)
    this.endDateValue = new Date(2017, 1, 1, 0, 0, 0, 0)
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
