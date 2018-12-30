import { Component, OnInit } from '@angular/core';

import { DASHBOARDASSETOVERVIEWGRIDDETAILS } from '../../../dashboardgriddetails';

@Component({
  selector: 'app-asset-overview',
  templateUrl: './asset-overview.component.html',
  styleUrls: ['./asset-overview.component.css']
})


export class AssetOverviewComponent implements OnInit {
  header:string = 'Asset Overview';
  gridDetails = DASHBOARDASSETOVERVIEWGRIDDETAILS; 

  constructor() { }

  ngOnInit() {
  }

}
