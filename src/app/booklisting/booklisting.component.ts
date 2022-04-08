import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booklisting',
  templateUrl: './booklisting.component.html',
  styleUrls: ['./booklisting.component.css']
})
export class BooklistingComponent implements OnInit {

  listings: any;
  listingId: any = null;
  username: any = null;
  type: any = null;

  bookListingForm: any;

  constructor(private router: Router, private db: DatabaseService, private route: ActivatedRoute) { 
    this.listingId = this.route.snapshot.params['id'];
    this.username = localStorage.getItem('username');
    this.type = localStorage.getItem('type');

    if(this.type === null){
      alert('Not Allowed! Must Login To Have Access To This Page!');
      this.router.navigate(['/']);
    }

    this.bookListingForm = new FormGroup({
      booking_id: new FormControl("", Validators.required),
      booking_start: new FormControl("", Validators.required),
      booking_end: new FormControl("", Validators.required),
      listing_id: new FormControl(this.listingId)
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.bookListingForm.valid) {
      this.db.createBooking(this.bookListingForm.value).subscribe((res: any) => {
        alert(`Booking ${res.data.createBooking.booking_id} Created`);
        this.router.navigate(['/bookings']);
      });
    }
  }

}
