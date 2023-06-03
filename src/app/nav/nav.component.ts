import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Services/account.service';
import { Observable } from 'rxjs';
import { userDTOs } from '../DTOs/userDTOs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model :any={};


  constructor(public accountService:AccountService, private router:Router, private toastr:ToastrService) {}

  ngOnInit(): void {
    
  }

  loging(){
    this.accountService.login(this.model).subscribe(data=>{
      this.router.navigateByUrl("/Members");
      console.log(data);
    },error=>{this.toastr.error(error.error);
    });
    
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
    
  }

  
    
  }



