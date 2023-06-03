import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'Registers',component:RegisterComponent},
  {path:'Members',component:MemberListComponent},
  {path:'Members/id',component:MemberDetailComponent},
  {path:'Lists',component:ListsComponent},
  {path:'Messages',component:MessageComponent},
  {path:'**',component:HomeComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
