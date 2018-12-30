import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-dashboardgrid2',
  templateUrl: './dashboardgrid2.component.html',
  styleUrls: ['./dashboardgrid2.component.css']
})
export class Dashboardgrid2Component implements OnInit {
  @Input() grid: any;

  constructor() { }

  ngOnInit() {
  }

}
