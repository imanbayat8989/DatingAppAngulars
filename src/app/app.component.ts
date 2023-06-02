import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userDTOs } from './DTOs/userDTOs';
import { AccountService } from './Services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  users:any;
  title = 'DatingAppAngulars';

  constructor(private http:HttpClient,private accountService:AccountService) {

  }

  ngOnInit(): void {
      this.getusers();
      this.setCurrentUser();
  }

  setCurrentUser(){
    const user:userDTOs=JSON.parse(localStorage.getItem('user')||"");
    this.accountService.setCurrentUser(user);
  }
  
  getusers(){
    this.http.get("https://localhost:7097/api/user").subscribe(x=>{
      this.users=x;
    }
    )

  }
}
