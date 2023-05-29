import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  users:any;
  title = 'DatingAppAngulars';

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
      this.getusers();
  }
  
  getusers(){
    this.http.get("https://localhost:7097/api/user").subscribe(x=>{
      this.users=x;
    }
    )

  }
}
