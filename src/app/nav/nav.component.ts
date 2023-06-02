import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Services/account.service';
import { Observable } from 'rxjs';
import { userDTOs } from '../DTOs/userDTOs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model :any={};


  constructor(public accountService:AccountService) {}

  ngOnInit(): void {
    
  }

  loging(){
    this.accountService.login(this.model).subscribe(data=>{
      console.log(data);
    },error=>{console.log(error);
    });
    
  }

  logout(){
    this.accountService.logout();
    
  }

  
    
  }



