import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: any;
  listings: any;
  numOfListings: number = 0;
  showDiv: boolean = false;
  loggedIn: boolean = false;

  searchForm = new FormGroup({
    term: new FormControl("", Validators.required),
  })

  constructor(private router: Router, private db: DatabaseService) { }

  ngOnInit(): void {
    if(localStorage.getItem('username') !== null){
      this.loggedIn = true;
    }
  }

  onSubmit() {
    if(this.searchForm.valid) {
      this.db.getListingsBySearch(this.searchForm.value.term).subscribe((res: any) => {
        this.listings = res.data.getListingsBySearch;
        this.numOfListings = res.data.getListingsBySearch.length;
        if(this.numOfListings === 0){
          this.showDiv = true;
        }
      });
    }
  }

}
