import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-dashboardgrid',
  templateUrl: './dashboardgrid.component.html',
  styleUrls: ['./dashboardgrid.component.css']
})


export class DashboardgridComponent implements OnInit {
   @Input() grid: any;

  constructor() {}

  ngOnInit() {
  }

}
