import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchText: string = '';
  searchData: any = [];

  constructor(private searchService: SearchService) {}

  search(event: any) {
    this.searchText = event;
  }
  searchButton() {
    this.searchService.search(this.searchText).then((data) => {
      this.searchData = data;
    });
  }

  ngOnInit(): void {}
}
