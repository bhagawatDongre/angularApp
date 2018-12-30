import { Component, OnInit } from '@angular/core';

import { tableDETAILS } from '../dashboardgriddetails';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class tableComponent implements OnInit {
  tableTitel = 'Distribution';
  tableData  = tableDETAILS;
  tablecol = Object.keys(tableDETAILS[0]);
  constructor() { }

  ngOnInit() {
  }

}
