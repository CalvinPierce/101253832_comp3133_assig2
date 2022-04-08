import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })

  constructor(private router: Router, private db: DatabaseService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.db.login(this.loginForm.value).subscribe((res: any) => {
        if(res.data?.login == null){ // error
          alert("There was an error, username or password incorrect.");
          this.router.navigate(['/login']);
        } else { // successful
          localStorage.setItem('username', this.loginForm.value.username)
          localStorage.setItem('token', res.data?.login)
          this.router.navigate(['/'])
        } 
      });
    }
  }

}
