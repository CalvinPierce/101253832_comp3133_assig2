import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings: any;
  type: any = null;

  constructor(private router: Router, private db: DatabaseService) {
    this.type = localStorage.getItem('type');
    if(this.type === null){
      alert('Not Allowed! Must Login To Have Access To This Page!');
      this.router.navigate(['/']);
    }
   }

  ngOnInit(): void {
    this.db.getBookingsByCurrentUser().subscribe((bookings: any) => {
      this.bookings = bookings.data.getBookingsByCurrentUser;
    })
  }

}
