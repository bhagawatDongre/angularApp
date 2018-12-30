import { Component, OnInit } from '@angular/core';
import { NETWORKDDETAILS } from '../../../dashboardgriddetails';


@Component({
  selector: 'app-network-overview',
  templateUrl: './network-overview.component.html',
  styleUrls: ['./network-overview.component.css']
})
export class NetworkOverviewComponent implements OnInit {
  header:string = 'Network Overview';
  gridDetails = NETWORKDDETAILS; 

  constructor() { }

  ngOnInit() {
  }

}
