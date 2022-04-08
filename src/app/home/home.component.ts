import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listings: any;
  token = localStorage.getItem('token');
  loggedIn: boolean = false;

  constructor(private router: Router, private db: DatabaseService) { }

  ngOnInit(): void {
    this.db.getAllListings().subscribe((listings: any) => {
      this.listings = listings.data.getAllListings;
    });
    if(this.token){
      this.loggedIn = true;
      this.db.getCurrentUser().subscribe((res: any) => {
        localStorage.setItem('type', res.data?.getCurrentUser.type)
      })
    }
  }

}
