import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { userDTOs } from '../DTOs/userDTOs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseurl:string='https://localhost:7097/api/';
  private currentUserSource=new ReplaySubject<userDTOs>()
  currentUser=this.currentUserSource.asObservable();




  constructor(private http:HttpClient) { }

  login(model:any) {
    return this.http.post(`${this.baseurl}account/login`,model)
    .pipe(map((response)=>{
      const user:userDTOs=<userDTOs>response;
      if(user){
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
      }
    }))
  }

  register(model:any){
    return this.http.post(`${this.baseurl}account/register`,model)
    .pipe(map((x:any)=>{
    
      if(x.isSuccess&& x.data!=undefined){
        localStorage.setItem('useregister',JSON.stringify(x.data));
        this.currentUserSource.next(x.data);
      }
      if (x.isSuccess==false)
      console.log(x.message);
    }))
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next({} as userDTOs);

    
  }
  setCurrentUser(user:userDTOs){
    this.currentUserSource.next(user);
  }
}
