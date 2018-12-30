import { Component, OnInit } from '@angular/core';

import { DASHBOARDTODAYSGRIDDETAILS } from '../../../dashboardgriddetails';

@Component({
  selector: 'app-today-summary',
  templateUrl: './today-summary.component.html',
  styleUrls: ['./today-summary.component.css']
})
export class TodaySummaryComponent implements OnInit {
  header:string = "Today's Summary";
  gridDetails = DASHBOARDTODAYSGRIDDETAILS;

  constructor() {}
    ngOnInit() {}

}
