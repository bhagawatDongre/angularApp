import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class searchComponent implements OnInit {
  title:string = 'Insight';
  numbers:any = [0, 1, 3,2]
  constructor() { }

  ngOnInit() {
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    alert('Will perform search');
  }
}
