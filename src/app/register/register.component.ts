import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @Output() cancelRegister = new EventEmitter();
  model:any={};

  constructor(private _accountService:AccountService){

  }

  register(){
    this._accountService.register(this.model).subscribe(x=>{
      console.log(x);
      this.cancel();
    },error=>{
      console.log(error);
    })
  }

  cancel(){
    
    this.cancelRegister.emit(false);
  }
}
